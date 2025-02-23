import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import {Link} from "react-router";

const ProductCard = ({product}) => {
	// console.log(product);
	const {image, title, id, rating, price} = product;
	// console.log(product);
	return (
		<div key={id} className={styles.card_container}>
			<Link to="">
				<img src={image} alt="" />
			</Link>
			<div>
				<h3>{title}</h3>
				<div className={styles.rating}>
					<Rating value={rating.rate} precision={0.1} />
					{/* count */}
					<small>{rating.count}</small>
				</div>
				{/* rating */}
			</div>
			<div className={styles.price}>
				{/* price */}
				<CurrencyFormat amount={price} />
			</div>
			<button className={styles.button}>add to cart</button>
		</div>
	);
};

export default ProductCard;
