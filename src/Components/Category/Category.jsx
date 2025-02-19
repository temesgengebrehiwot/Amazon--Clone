import React from "react";
import CategoryCard from "./CategoryCard";
import categoryImages from "./categorylistsinfo";
import styles from "./CategoryCard.module.css";

const Category = () => {
	return (
		<div className={styles.category_container}>
			{categoryImages.map((item, index) => {
				return <CategoryCard data={item} key={index} />;
				// console.log(item);
			})}
		</div>
	);
};

export default Category;
