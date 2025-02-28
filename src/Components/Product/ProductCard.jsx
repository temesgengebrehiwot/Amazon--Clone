import React, {useContext} from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import {Link} from "react-router";
import {DataContext} from "../DataProvider/DataProvider";
import {Type} from "../../Utility/action.type";

const ProductCard = ({product, flex, renderDesc, renderAddButton}) => {
	// console.log(product);
	const {image, title, id, rating, price, description} = product;
	// console.log(product);
	const [state, dispatch] = useContext(DataContext);
	// console.log(state);

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				image,
				title,
				id,
				rating,
				price,
				description,
			},
		});
	};
	return (
		<>
			<div
				key={id}
				className={`${styles.card_container} ${
					flex ? styles.product_flexed : ""
				}`}
			>
				<Link to={`/products/${id}`}>
					<img src={image} alt="" />
				</Link>
				<div>
					<div>
						<h3>{title}</h3>
						{renderDesc && (
							<div
								style={{
									maxWidth: "500px",
									marginLeft: "10px",
								}}
							>
								{description}
							</div>
						)}
						<div className={styles.rating}>
							<Rating value={rating?.rate} precision={0.1} />
							{/* count */}
							<small>{rating?.count}</small>
						</div>
						{/* rating */}
					</div>
					<div className={styles.price}>
						{/* price */}
						<CurrencyFormat amount={price} />
					</div>
					{renderAddButton && (
						<button className={styles.button} onClick={addToCart}>
							add to cart
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductCard;
