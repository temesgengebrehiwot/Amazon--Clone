import React, {useContext, useState} from "react";
import LayOut from "../../Components/LayOut/LayOut";
import styles from "./Payment.module.css";
import {DataContext} from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import {axiosInstance} from "../../Api/axios";
import {ClipLoader} from "react-spinners";
import {db} from "../../Utility/firebase";
import {useNavigate} from "react-router";
import {Type} from "../../Utility/action.type";

const Payment = () => {
	const [{basket, user}, dispatch] = useContext(DataContext);
	const [cardError, setCardError] = useState(null);
	const [processing, setProcessing] = useState(false);

	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	// console.log(user);

	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

	const handleChange = (e) => {
		// console.log(e);
		e?.error?.message ? setCardError(e.error.message) : setCardError("");
	};

	const handlePayment = async (e) => {
		e.preventDefault();
		try {
			setProcessing(true);
			//1. contact backend or functions
			const response = await axiosInstance({
				method: "POST",
				url: `/payment/create?total=${total * 100}`,
			});
			// console.log(response.data);
			const clientSecret = response.data?.clientSecret;

			// 2. confirming the client
			const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			});
			// console.log(confirmation);

			// 3. after confirming the client save the data on firebase databse and clear  the basket and send it to orders page
			await db
				.collection("users")
				.doc(user.uid)
				.collection("orders")
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});
			dispatch({type: Type.EMPTY_BASKET});
			setProcessing(false);
			navigate("/orders", {state: {msg: "You have placed a new order"}});
		} catch (error) {
			// console.log(error);
			setProcessing(false);
		}
	};
	return (
		<LayOut>
			{/* header */}
			<section>
				<div className={styles.payment_header}>
					Checkout ({totalItem}) Items
				</div>
			</section>
			{/* payment method */}
			<section className={styles.payments}>
				{/* address */}
				<div className={styles.flex}>
					<h3>Delivery Address</h3>
					<div>
						<div>{user?.email}</div>
						<div>123 React Lane</div>
						<div>Chicago, IL</div>
					</div>
				</div>
				<hr />
				{/* product */}
				<div className={styles.flex}>
					<h3>Review Items and Delivery</h3>
					<div style={{marginBottom: "10px"}}>
						{basket?.map((item, index) => (
							<ProductCard key={index} product={item} flex={true} />
						))}
					</div>
				</div>
				<hr />
				{/* card form*/}
				<div className={styles.flex}>
					<h3>Payment Methods</h3>
					<div className={styles.payment_card_container}>
						<div className={styles.payment_details}>
							<form onSubmit={handlePayment}>
								{/* card error */}
								{cardError && <small style={{color: "red"}}>{cardError}</small>}
								{/* card element */}
								<CardElement onChange={handleChange} />

								{/* price */}
								<div className={styles.payment_price}>
									<div>
										<span
											style={{
												display: "flex",
												gap: "10px",
											}}
										>
											<p>Total Order</p>|<CurrencyFormat amount={total} />
										</span>
									</div>
									<button type="submit">
										{processing ? (
											<div className={styles.loading}>
												<ClipLoader color="gray" size={14} />
												<p>Please Wait...</p>
											</div>
										) : (
											"Pay Now"
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</LayOut>
	);
};

export default Payment;
