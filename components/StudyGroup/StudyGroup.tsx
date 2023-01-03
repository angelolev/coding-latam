import React from "react";
import Image from 'next/image'
import { IStudyGroup } from "../../models";

const StudyGroup: React.FC<IStudyGroup> = ({ link, image, name, description }) => {
  const goToLink = (URL: string) => {
    window.open(URL, "_blank");
  };

  return (
    <div
      className="group"
      onClick={() => {
        goToLink(link);
      }}
    >
      <div className="group__image">
        <Image src={`/images/${image}`} width={50} height={55} alt={name} />
      </div>
      <div className="group__description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StudyGroup;
