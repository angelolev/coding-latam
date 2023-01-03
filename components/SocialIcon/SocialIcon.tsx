import React from 'react';
import { ISocialIcon } from '../../models';

const SocialIcon : React.FC<ISocialIcon> = ({ name, link }) => {
	return (
		<a target="_blank" href={link} rel="noopener noreferrer">
		  <span className={`icon icon-${name}`}></span>
		</a>
	);
};

export default SocialIcon;
