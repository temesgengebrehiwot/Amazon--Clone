import React from "react";
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {CarouselImages} from "./data";
import {Carousel} from "react-responsive-carousel";

const CarouselEffect = () => {
	return (
		<div>
			<Carousel
				autoplay={true}
				infiniteLoop={true}
				showIndicators={false}
				showThumbs={false}
			>
				{CarouselImages.map((imageItemLink, index) => {
					return <img key={index} src={imageItemLink} alt="" />;
				})}
			</Carousel>
			<div className={styles.shadow_img}></div>
		</div>
	);
};

export default CarouselEffect;
