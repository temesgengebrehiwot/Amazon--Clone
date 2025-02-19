import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

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
		<section>
			{products.map((eachProduct) => (
				<ProductCard product={eachProduct} key={eachProduct.id} />
			))}
		</section>
	);
};

export default Product;
