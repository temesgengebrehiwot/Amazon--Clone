import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				// console.log(res);
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
	// console.log(products);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<section className={styles.products_container}>
					{products?.map((product) => {
						// console.log(product);
						return (
							<ProductCard
								product={product}
								key={product.id}
								renderAddButton={true}
							/>
						);
					})}
				</section>
			)}
		</>
	);
};

export default Product;
