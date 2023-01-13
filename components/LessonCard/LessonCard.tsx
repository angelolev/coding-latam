import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ILesson } from "../../models";
import { getCourseImage } from "../../utils";

const LessonCard: React.FC<ILesson> = ({
  id,
  title,
  type,
  description,
  link,
}) => {
  return (
    <div className="lesson">
      <div className="lesson__image">
        <Image src={getCourseImage(type)} width={270} height={180} alt="" />
      </div>
      <div className="lesson__description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="lesson__link">
        <Link href={`/clases/${id}`}>
          <a>Ver Ahora</a>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
