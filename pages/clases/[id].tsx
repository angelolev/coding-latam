import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Membership, Resource } from "../../components";
import { ILesson, IResource } from "../../models";
import {
  getFirebaseData,
  getFirebaseDataWithQuery,
  getFirebaseDoc,
} from "../../utils";

interface LessonPageProps {
  lesson: ILesson;
  resources: IResource[];
}

const Lesson: NextPage<LessonPageProps> = ({ lesson, resources }) => {
  console.log(resources, "xd");
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
            <p>{lesson.description}</p>
          </div>
          <div className="lesson__video-link">
            <Link href={`/clases/${lesson.type}`}>
              <a>Regresar</a>
            </Link>
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
          {/* <Articles lessonId={lesson.id} /> */}
        </>
      </div>
      <div className="lesson__video-resources">
        {/* {lesson ? (
          <>
            <Questions
              questions={questions}
              addNewQuestion={handleAddNewQuestion}
              handleLikeQuestion={handleLikeQuestion}
            />
          </>
        ) : (
          <h3>Cargando</h3>
        )} */}

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
  const resources = await getFirebaseDataWithQuery(
    "resources",
    "session_id",
    params.id
  );

  return { props: { lesson, resources } };
}

export default Lesson;
