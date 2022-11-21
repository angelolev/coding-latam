import React from "react";
import Badge from "../Badge";

interface Props {

}

const CategoryFilter:React.FC<Props> = ({ categories, handleFilter }) => {
  return (
    <ul className="category-filter">
      {categories?.map((category) => {
        return (
          <Badge
            elementClass={`category-filter__item ${category.type}`}
            handleClick={() => handleFilter(category.type)}
            name={category.name}
            key={category.id}
            type={category.type}
          />
        );
      })}
    </ul>
  )}

export default CategoryFilter