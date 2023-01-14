import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IRecommendedCourse } from "../../models";

const CourseCard: React.FC<IRecommendedCourse> = ({
  status,
  image,
  title,
  description,
  link,
  releaseDate,
}) => {
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
        <Image
          layout="responsive"
          src={`/images/${image}`}
          width={245}
          height={163}
          alt=""
        />
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

export default CourseCard;
