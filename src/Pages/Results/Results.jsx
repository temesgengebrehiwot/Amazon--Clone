import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {productUrl} from "../../API/endpoint";
import LayOut from "../../Components/LayOut/LayOut";
import styles from "./Result.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const {categoryName} = useParams();
	// console.log(categoryName);

	useEffect(() => {
		setIsLoading(true);

		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				// console.log(res.data);
				setResults(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
	// console.log(results);
	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
				<section>
					<h1 style={{padding: "30px"}}>Results</h1>
					<p style={{padding: "30px"}}>Category / {categoryName}</p>
					<hr />
					<div className={styles.products_container}>
						{results?.map((product) => {
							// console.log(product);
							return (
								<ProductCard
									key={product.id}
									product={product}
									renderAddButton={true}
								/>
							);
						})}
					</div>
				</section>
			)}
		</LayOut>
	);
};

export default Results;
