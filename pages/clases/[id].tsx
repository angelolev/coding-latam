import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { Membership, Question, Resource } from "../../components";
import { ILesson, IQuestion, IResource } from "../../models";
import {
  getFirebaseData,
  getFirebaseDataWithQuery,
  getFirebaseDoc,
} from "../../utils";
import { useForm } from "react-hook-form";
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";
import { database } from "../../firebase/client";

interface LessonPageProps {
  lesson: ILesson;
  resources: IResource[];
  questions: IQuestion[];
  currentId: string;
}

const normalizeDescription = (description: string) => {
  return { __html: description.replaceAll("\\n", "<br /><br />") };
};

const Lesson: NextPage<LessonPageProps> = ({
  lesson,
  resources,
  questions,
  currentId,
}) => {
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    const newQuestion = {
      ...data,
      lesson_id: currentId,
      likes: 0,
      comments: [],
    };

    await addDoc(collection(database, "questions"), newQuestion);
    setCurrentQuestions([...questions, newQuestion]);
    reset({ title: "" });
  };

  return (
    <section className="lesson__video">
      <div className="container"></div>
      <div className="lesson__video-media">
        <>
          {/* <video
              className="video"
              src={session[0].urlVideo}
              controls="controls"
              controlsList="nodownload"
            ></video> */}
          <iframe
            width="100%"
            height="496"
            src={lesson.urlVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="lesson__video-info">
            <h2>{lesson.title}</h2>
            <p
              dangerouslySetInnerHTML={normalizeDescription(lesson.description)}
            ></p>
          </div>
          <div className="lesson__video-link">
            <Link href={`/clases`}>
              <a>Regresar</a>
            </Link>
          </div>
        </>
      </div>
      <div className="lesson__video-resources">
        <div className="questions">
          <div className="questions__title">
            <h3>Preguntas de la clase</h3>
            <p>Tienes alguna duda? Déjala aquí:</p>
          </div>
          <div className="questions__form-new-question">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                id="title"
                rows={5}
                cols={50}
                {...register("title", { required: true, maxLength: 100 })}
              />
              {errors?.title?.type === "required" && (
                <p className="error">Este campo es requerido</p>
              )}
              {errors?.title?.type === "maxLength" && (
                <p className="error">First name cannot exceed 100 characters</p>
              )}
              <input className="btn yellow" type="submit" value="Agregar" />
            </form>
            {/* <FormAddQuestion addNewQuestion={handleAddNewQuestion} /> */}
          </div>
          <div className="questions__list">
            {currentQuestions?.map((question: IQuestion) => {
              return (
                <Question
                  id={question.id}
                  key={question.id}
                  title={question.title}
                  comments={question.comments}
                  likes={question.likes}
                  // handleLikeQuestion={() => handleLikeQuestion(question.id)}
                  // handleAddNewComment={() => handleAddNewComment(question.id)}
                />
              );
            })}
          </div>
        </div>
        <div className="lesson-resources">
          <div className="lesson-resources__title">
            <h3>Recursos de la clase</h3>
          </div>
          <div className="lesson-resources__list">
            {resources.map((resource: IResource) => {
              return (
                <Resource
                  id={resource.id}
                  key={resource.id}
                  link={resource.link}
                  title={resource.title}
                />
              );
            })}
          </div>
        </div>
        <Membership />
        {/* <Certification /> */}
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const lessons = await getFirebaseData("lessons");

  const paths = lessons.map((lesson) => ({
    params: { id: lesson.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const lesson = await getFirebaseDoc("lessons", params.id);
  const questions = await getFirebaseDataWithQuery(
    "questions",
    "lesson_id",
    params.id
  );
  const resources = await getFirebaseDataWithQuery(
    "resources",
    "session_id",
    params.id
  );
  const currentId = params.id;

  return { props: { lesson, resources, questions, currentId } };
}

export default Lesson;
