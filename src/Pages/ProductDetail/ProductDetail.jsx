import React, {useState, useEffect} from "react";
import LayOut from "../../Components/LayOut/LayOut";
import {useParams} from "react-router";
import axios from "axios";
import {productUrl} from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
	const {productId} = useParams();
	// console.log(productId);
	const [productDetail, setProductDetail] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				// console.log(res.data);
				setProductDetail(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}, []);
	// console.log(productDetail);
	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
				<ProductCard
					product={productDetail}
					flex={true}
					renderDesc={true}
					renderAddButton={true}
				/>
			)}
		</LayOut>
	);
};

export default ProductDetail;
