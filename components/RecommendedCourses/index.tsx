import React, { useEffect, useState } from "react";
import RecommendedCourseCard from "./courseCard";
import { app, database } from "../../firebase/client"
import { collection, getDocs } from "firebase/firestore";
import { IRecommendedCourse } from "../../models/recommended-course";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecommendedCoursesFirebase } from "../../../services/recommended-courses-service";
// import CardSkeleton from "../Skeletons/CardSkeleton";

const RecommendedCourses = ({coursesList}: any) => {
  // const dispatch = useDispatch();
  // const recommendedCourses = useSelector((state) => state.recommendedCourses);
  
  // const [recommendedCourses, setRecommendedCourses] = useState(coursesList)

  // const dbInstance = collection(database, 'recommendedCourses');
  // const getCourses = () => {
  //   getDocs(dbInstance)
  //     .then((data) => {
  //       setRecommendedCourses(data.docs.map((item) => {
  //         return {...item.data(), id: item.id}
  //       }))
  //     })
  // }

  // useEffect(() => {
  //   setRecommendedCourses(coursesList)
  // }, [])

  // useEffect(() => {
  //   dispatch(getRecommendedCoursesFirebase());
  // }, []);

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
          // <CardSkeleton />
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedCourses;
