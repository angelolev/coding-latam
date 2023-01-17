import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Hero } from "../../components";
import { IComment, IQuestion } from "../../models";
import { getFirebaseData, getFirebaseDoc } from "../../utils";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import { database } from "../../firebase/client";

interface QuestionPageProps {
  question: IQuestion;
  currentId: string;
}

const Question: NextPage<QuestionPageProps> = ({ question, currentId }) => {
  const [comments, setComments] = useState(question.comments);
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //   const unsub = onSnapshot(doc(database, "questions", currentId), (doc) => {
  //     setComments(doc.data()?.comments);
  //   });

  const onSubmit = async (data: any) => {
    const newComment = {
      user: {
        photoURL: user?.photoURL,
        displayName: user?.displayName,
      },
      ...data,
    };

    const docRef = doc(database, "questions", currentId);

    await updateDoc(docRef, {
      comments: arrayUnion(newComment),
    });

    setComments([...(question.comments ?? []), newComment]);

    reset({ description: "" });
  };

  return (
    <>
      <Hero
        title="Ayuda a la comunidad respondiendo dudas"
        image="studygroup.svg"
      />
      <section className="question-item">
        <h2>{question?.title}</h2>
        <p>
          Comenta tu respuesta para que otros miembros de la comunidad puedan
          resolver sus dudas.
        </p>
        <div>
          {comments?.map((comment: IComment, index) => {
            return (
              <div className="question-item__comment" key={index}>
                <div className="question-item__user">
                  <Image
                    src={comment.user.photoURL}
                    alt={comment.user.displayName || "User"}
                    width={50}
                    height={50}
                  />
                  <h3>{comment.user.displayName}</h3>
                </div>
                <p className="question-item__description" key={comment.id}>
                  {comment.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <FormAddComment addNewComment={handleAddNewComment} /> */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
          <textarea
            id="description"
            rows={5}
            cols={50}
            style={{ marginBottom: "10px" }}
            {...register("description", { required: true, maxLength: 100 })}
          />
          {errors?.description?.type === "required" && (
            <p className="error">Este campo es requerido</p>
          )}
          {errors?.description?.type === "maxLength" && (
            <p className="error">
              Tu comentario puede tener un máximo 50 caracteres
            </p>
          )}
          <input className="btn yellow" type="submit" value="Responder" />
        </form>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const questions = await getFirebaseData("questions");

  const paths = questions.map((question) => ({
    params: { id: question.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const question = await getFirebaseDoc("questions", params.id);
  const currentId = params.id;

  return { props: { question, currentId } };
}

export default Question;
