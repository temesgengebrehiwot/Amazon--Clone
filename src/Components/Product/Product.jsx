import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";

const Product = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				// console.log(res);
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className={styles.products_container}>
			{products.map((product) => {
				return <ProductCard product={product} key={product.id} />;
			})}
		</section>
	);
};

export default Product;
