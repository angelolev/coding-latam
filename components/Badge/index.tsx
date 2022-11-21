import React from "react";

interface Props {

}

const Badge:React.FC<Props> = ({elementClass, handleClick, name}) => {
  return (
    <li className={elementClass} onClick={handleClick}>
      {name}
    </li>
  )}

export default Badge