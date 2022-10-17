import React from "react";
import Image from "next/image";
import Link from "next/link";
import courseImage from '../../images/web-dev.png'
// import Button from "../../elements/Button/Button";

interface CourseCard {
  status: string;
  image: string;
  title: string;
  description: string;
  link: string;
  releaseDate: string;
}

const RecommendedCourseCard = (props: CourseCard) => {
  const { status, image, title, description, link, releaseDate } = props;

  let courseCardClasses = "recommended-courses__course";

  if (!status) {
    courseCardClasses += " unavailable";
  }

  return (
    <div className={courseCardClasses} id="courses">
      {!status ? (
        <span className="recommended-courses__course-status">
          {releaseDate}
        </span>
      ) : (
        <span className="recommended-courses__course-status available">
          Disponible
        </span>
      )}
      <div className="recommended-courses__course-image">
        {/* <img src={`./images/${image}`} alt="" /> */}
        {/* <Image src={`/images/${image}`} layout="fill" alt="Terminal" /> */}
        <Image src={courseImage} layout="responsive" alt="Terminal" />
      </div>
      <div className="recommended-courses__course-title">
        <h3>{title}</h3>
      </div>
      <div className="recommended-courses__course-description">
        <p>{description}</p>
      </div>
      {status ? (
        <div className="recommended-courses__course-button">
          {/* <Link className="yellow" to={link}>
            Ir al Curso
          </Link> */}
          <Link href={link}>
            <a className="yellow">Ir al Curso</a>
          </Link>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecommendedCourseCard;
