import React, {useContext} from "react";
import styles from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import {DataContext} from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import {Link} from "react-router";
import {Type} from "../../Utility/action.type";
import {FaAngleDown} from "react-icons/fa6";
import {FaAngleUp} from "react-icons/fa6";

const Cart = () => {
	const [{basket, user}, dispatch] = useContext(DataContext);

	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

	const increment = (item) => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item,
		});
	};

	const decrement = (id) => {
		dispatch({
			type: Type.REMOVE_FROM_BASKET,
			id,
		});
	};
	console.log(basket);
	return (
		<LayOut>
			<section className={styles.container}>
				<div className={styles.cart_container}>
					<h2>Hello</h2>
					<h3>Your Shopping Basket</h3>
					<hr />
					{basket?.length === 0 ? (
						<p>Oops ! No item is in your cart</p>
					) : (
						basket?.map((item, i) => {
							return (
								<section className={styles.cart_product}>
									<ProductCard
										key={i}
										product={item}
										renderDesc={true}
										flex={true}
										renderAddButton={false}
									/>
									<div className={styles.btn_container}>
										<button onClick={() => increment(item)}>
											<FaAngleUp size={25} />
										</button>
										<span>{item.amount}</span>
										<button onClick={() => decrement(item.id)}>
											<FaAngleDown size={25} />
										</button>
									</div>
								</section>
							);
						})
					)}
				</div>

				{basket?.length !== 0 && (
					<div className={styles.subtotal}>
						<div>
							<p>SubTotal ({basket?.length}) Items</p>
							<CurrencyFormat amount={total} />
						</div>
						<span>
							<input type="checkbox" name="" id="" />
							<small>This order contains a gift</small>
						</span>
						<Link to="/payments">Continue to checkout</Link>
					</div>
				)}
			</section>
		</LayOut>
	);
};

export default Cart;
