import React from "react";

const SocialIcon = ({ name, link }) => {
  return (
    <>
      <a target="_blank" href={link} rel="noopener noreferrer">
        <span className={`icon icon-${name}`}></span>
      </a>
    </>
  );
};

export default SocialIcon;
