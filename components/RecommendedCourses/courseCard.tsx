import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <Image src={`/images/${image}`} width={245} height={163} alt="" />
      </div>
      <div className="recommended-courses__course-title">
        <h3>{title}</h3>
      </div>
      <div className="recommended-courses__course-description">
        <p>{description}</p>
      </div>
      {status ? (
        <div className="recommended-courses__course-button">
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
