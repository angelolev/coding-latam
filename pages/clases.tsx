import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { CategoryFilter, LessonCard } from "../components";
import { Hero } from "../components/Hero";
import { ILesson } from "../models";

interface LessonsPageProps {
  lessons: ILesson[];
}
// import LessonCard from "../../components/lessons/LessonCard";
// import CardSkeleton from "../../components/commons/Skeletons/CardSkeleton";
// import CategoryFilter from "../../components/commons/Filters/CategoryFilter";
// import heroImage from "../../components/lessons/studygroup.svg";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getLessonsFirebase,
//   getLessonsFiltered,
// } from "../../services/lessons-service";
// import { useParams } from "react-router";

const Lessons: NextPage<LessonsPageProps> = ({ lessons }) => {
  //   const dispatch = useDispatch();
  //   const sessions = useSelector((state) => state.lessons);
  const [currentType, setCurrentType] = useState(null);
  //   const { type } = useParams();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     if (type) {
  //       setCurrentType(type);
  //       dispatch(getLessonsFiltered(type));
  //     } else {
  //       dispatch(getLessonsFirebase());
  //     }
  //   }, [type, dispatch]);

  const handleFilter = (type) => {
    // dispatch(getLessonsFiltered(type));
  };

  const lessonsCategories = [
    {
      id: 1,
      name: "HTML",
      type: "html",
    },
    {
      id: 2,
      name: "CSS",
      type: "css",
    },
    {
      id: 3,
      name: "Responsive Design",
      type: "responsive-design",
    },
    {
      id: 4,
      name: "Flexbox",
      type: "flexbox",
    },
  ];

  return (
    <>
      {!currentType ? (
        // <Hero title={`Clases Disponibles`} image={heroImage} />
        <Hero
          title="Mejora tu aprendizaje con los grupos de estudio"
          image="study.png"
        />
      ) : (
        // <Hero title={`Curso de ${type}`} image={heroImage} />
        <Hero
          title="Mejora tu aprendizaje con los grupos de estudio"
          image="study.png"
        />
      )}
      <section className="lessons">
        <div className="container">
          <CategoryFilter
            categories={lessonsCategories}
            handleFilter={handleFilter}
          />

          <div className="lessons__title">
            <h3>Lista de clases disponibles</h3>
          </div>
          <div className="lessons__description">
            <p>
              Aquí podrás encontrar las sesiones junto con material referente a
              los temas de las clases.
            </p>
          </div>
          <div className="lessons__list">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                type={lesson.type}
                description={lesson.description}
                link={lesson.link}
                urlVideo={lesson.urlVideo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const apiResponse = await fetch("http://localhost:3000/api/lessons");

  const lessons = await apiResponse.json();

  return {
    props: {
      lessons,
    },
  };
}

export default Lessons;
