// import {useState} from "react";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Carousel />
			<Category />
			<Product />
		</>
	);
}

export default App;
