import React from "react";
import styles from "./Header.module.css";
import {MdMenu} from "react-icons/md";

const LowerHeader = () => {
	return (
		<div className={styles.lower_container}>
			<ul>
				<li>
					<MdMenu />
					<p>All</p>
				</li>
				<li>Today's Deals</li>
				<li>Customer Services</li>
				<li>Registry</li>
				<li>Gift Cards</li>
				<li>Sell</li>
			</ul>
		</div>
	);
};

export default LowerHeader;
