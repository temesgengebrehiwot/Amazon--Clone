import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Auth from "./Pages/Auth/Auth";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Payment from "./Pages/Payment/Payment";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
	"pk_test_51Qy5vaBTpfwa6zPGQlWTA7uAwK2nUF7Nk78shgMoN8cLzUFuI3NQzcAwXJw6DeDXqw7nK1dp3p9Y1IVPsE6o6nfa00AVEezeKo"
);

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/auth" element={<Auth />}></Route>
				<Route
					path="/payment"
					element={
						<ProtectedRoute msg={"You must login to pay"} redirect={"/auth"}>
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				></Route>

				<Route
					path="/orders"
					element={
						<ProtectedRoute
							msg={"You must login to see your orders"}
							redirect={"/orders"}
						>
							<Orders />
						</ProtectedRoute>
					}
				></Route>
				<Route path="/category/:categoryName" element={<Results />}></Route>
				<Route path="/products/:productId" element={<ProductDetail />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
