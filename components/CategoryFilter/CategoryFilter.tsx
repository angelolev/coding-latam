import React from 'react';
import { IBadge } from '../../models';
import { Badge } from '../Badge';

export interface CategoryFilterInterface {
categories: IBadge[];
  handleFilter: () => void;
}

const CategoryFilter : React.FC<CategoryFilterInterface> = ({ categories, handleFilter }) => {
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
				id={category.id}
			  />
			);
		  })}
		</ul>
	  )
};

export default CategoryFilter;
