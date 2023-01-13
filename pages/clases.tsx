import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryFilter, LessonCard } from "../components";
import { Hero } from "../components/Hero";
import { ILesson } from "../models";
import { AppStore } from "../store";
import { setLessons } from "../store/slices/lessons";
import {
  getFirebaseData,
  getFirebaseDataOrdered,
  getLessonsFiltered,
} from "../utils";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useAppDispatch } from "../store/hooks";

interface LessonsPageProps {
  lessons: ILesson[];
}

const Lessons: NextPage<LessonsPageProps> = ({ lessons }) => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const stateLessons = useSelector((store: AppStore) => store.lessons);

  useEffect(() => {
    dispatch(setLessons(lessons));
  }, [dispatch, lessons]);

  const handleFilter = (type: string) => {
    dispatch(getLessonsFiltered(type));
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

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <Hero title="Clases disponibles" image="studygroup.svg" />
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
            {stateLessons.map((lesson) => (
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
  const lessons = await getFirebaseDataOrdered("lessons", "type");

  return {
    props: {
      lessons,
    },
  };
}

export default Lessons;
