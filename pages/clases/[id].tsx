import { NextPage } from "next";
import React from "react";
import { ILesson } from "../../models";

interface LessonPageProps {
  lesson: ILesson;
}

const Lesson: NextPage<LessonPageProps> = ({ lesson }) => {
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
            {/* <Link to={`/clases/${type}`}>Regresar</Link> */}
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

        {/* <Membership /> */}
        {/* <Certification /> */}
      </div>
    </section>
  );
};

// export async function getServerSideProps() {
//   const apiResponse = await fetch("http://localhost:3000/api/lessons");

//   const lessons = await apiResponse.json();

//   return {
//     props: {
//       lessons,
//     },
//   };
// }

export default Lesson;
