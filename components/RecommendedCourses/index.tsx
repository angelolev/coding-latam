import React, { useEffect } from "react";
import RecommendedCourseCard from "./courseCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecommendedCoursesFirebase } from "../../../services/recommended-courses-service";
// import CardSkeleton from "../Skeletons/CardSkeleton";

const RecommendedCourses = () => {
  // const dispatch = useDispatch();
  // const recommendedCourses = useSelector((state) => state.recommendedCourses);

  // useEffect(() => {
  //   dispatch(getRecommendedCoursesFirebase());
  // }, []);
  const recommendedCourses = [
    {
      id: 0,
      status: 'available',
      image: 'web-dev.png',
      title: 'Curs ode HTML',
      description: 'Description',
      link: "https://lahaus.com",
      releaseDate: '11/07/2022'
    }
  ]

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
        {recommendedCourses !== null ? (
          recommendedCourses.map((course) => (
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
