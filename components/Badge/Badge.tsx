import React from 'react';
import { IBadge } from '../../models';

const Badge : React.FC<IBadge> = ({elementClass, handleClick, name}) => {
	return (
	  <li className={elementClass} onClick={handleClick}>
		{name}
	  </li>
	)}

export default Badge;
