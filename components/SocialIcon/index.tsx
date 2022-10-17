import React from "react";
import { ISocialIcon } from "../../models/social-icon";

const SocialIcon = ({ name, link }: ISocialIcon) => {
  return (
      <a target="_blank" href={link} rel="noopener noreferrer">
        <span className={`icon icon-${name}`}></span>
      </a>
  );
};

export default SocialIcon;
