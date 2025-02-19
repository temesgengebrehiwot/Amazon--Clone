import React from "react";
import styles from "./Header.module.css";

import {BsSearch} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import {SlLocationPin} from "react-icons/sl";
import LowerHeader from "./LowerHeader";

const Header = () => {
	return (
		<>
			<header>
				<div className={styles.header_container}>
					{/* logo */}
					<div className={styles.logo_container}>
						<a href="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</a>

						{/* delivery to */}
						<div className={styles.delivery}>
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Deliver to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>
					<div className={styles.search}>
						{/* search */}
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="search" name="" id="" placeholder="Search Amazon" />
						<div className={styles.search_icon_container}>
							<BsSearch size={20} />
						</div>
					</div>
					<div className={styles.order_container}>
						<a href="" className={styles.language}>
							<img
								width={60}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt=""
							/>
							<select name="" id="">
								<option value="">EN</option>
							</select>
						</a>

						<a href="">
							<div>
								<p>Sign In</p>
								<span>Acount & Lists</span>
							</div>
						</a>
						<a href="">
							<div>
								<p>Returns</p>
								<span>& Orders</span>
							</div>
						</a>
						{/* cart */}
						<a href="/cart" className={styles.cart}>
							<BiCart size={35} />
							<span>0</span>
						</a>
					</div>
				</div>
			</header>
			<LowerHeader />
		</>
	);
};

export default Header;
