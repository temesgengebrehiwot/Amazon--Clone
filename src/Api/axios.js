import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "http://localhost:5000",
	// deployed on render.com
	baseURL: "https://amazon-api-f8fn.onrender.com/",
});

export {axiosInstance};
