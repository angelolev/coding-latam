import { NextPage } from "next";
import { CourseCard, Header, JoinUs } from "../components";
import { IRecommendedCourse } from "../models";

interface HomePageProps {
  coursesList: IRecommendedCourse[];
}

const Home: NextPage<HomePageProps> = ({ coursesList }) => {
  return (
    <>
      <Header />
      <div className="recommended-courses">
        <div className="recommended-courses__content">
          <div className="recommended-courses__intro">
            <h2 id="description">¿Qué es lo que hacemos?</h2>
            <p>
              Compartimos conocimiento(talleres, workshops, cursos, etc)
              apoyando a los profesionales que inician en el mundo del
              desarrollo web.
            </p>
          </div>
          {coursesList !== null ? (
            coursesList.map((course: IRecommendedCourse) => (
              <CourseCard
                id={course.id}
                key={course.id}
                status={course.status}
                image={course.image}
                title={course.title}
                description={course.description}
                link={course.link}
                releaseDate={course.releaseDate}
              />
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
      <JoinUs />
    </>
  );
};

export async function getServerSideProps() {
  const apiResponse = await fetch(
    "http://localhost:3000/api/recommendedCourses"
  );

  const coursesList = await apiResponse.json();

  return {
    props: {
      coursesList,
    },
  };
}

export default Home;
