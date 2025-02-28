import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignUp from "./Pages/Auth/SignUp";
import Payments from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/auth" element={<SignUp />}></Route>
				<Route path="/payments" element={<Payments />}></Route>
				<Route path="/orders" element={<Orders />}></Route>
				<Route path="/category/:categoryName" element={<Results />}></Route>
				<Route path="/products/:productId" element={<ProductDetail />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
