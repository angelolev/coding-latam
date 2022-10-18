import React, { useEffect, useState } from "react";
import RecommendedCourseCard from "./courseCard";
import { app, database } from "../../firebase/client"
import { collection, getDocs } from "firebase/firestore";
import { IRecommendedCourse } from "../../models/recommended-course";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecommendedCoursesFirebase } from "../../../services/recommended-courses-service";
// import CardSkeleton from "../Skeletons/CardSkeleton";

interface IRecommendedCourses {
  coursesList: IRecommendedCourse[]
}

const RecommendedCourses: React.FC<IRecommendedCourses> = ({coursesList}: any) => {
  return (
    <div className="recommended-courses">
      <div className="recommended-courses__content">
        <div className="recommended-courses__intro">
          <h2 id="description">¿Qué es lo que hacemos?</h2>
          <p>
            Compartimos conocimiento(talleres, workshops, cursos, etc) apoyando
            a los profesionales que inician en el mundo del desarrollo web.
          </p>
        </div>
        {coursesList !== null ? (
          coursesList.map((course: IRecommendedCourse) => (
            <RecommendedCourseCard key={course.id} {...course}/>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedCourses;
