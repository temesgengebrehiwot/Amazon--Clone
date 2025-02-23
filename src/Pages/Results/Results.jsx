import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {productUrl} from "../../API/endpoint";
import LayOut from "../../Components/LayOut/LayOut";
import styles from "./Result.module.css";
import ProductCard from "../../Components/Product/ProductCard";

const Results = () => {
	const [results, setResults] = useState([]);
	const {categoryName} = useParams();
	// console.log(categoryName);

	useEffect(() => {
		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				// console.log(res.data);
				setResults(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	// console.log(results);
	return (
		<LayOut>
			<section>
				<h1 style={{padding: "30px"}}>Results</h1>
				<p style={{padding: "30px"}}>Category / {categoryName}</p>
				<hr />
				<div className={styles.products_container}>
					{results?.map((product) => {
						console.log(product);
						return <ProductCard key={product.id} product={product} />;
					})}
				</div>
			</section>
		</LayOut>
	);
};

export default Results;
