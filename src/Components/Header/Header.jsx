import React, {useContext} from "react";
import styles from "./Header.module.css";
import {Link} from "react-router";
import {auth} from "../../Utility/firebase";
import {BsSearch} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import {SlLocationPin} from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import {DataContext} from "../DataProvider/DataProvider";

const Header = () => {
	const [{user, basket}, dispatch] = useContext(DataContext);
	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	return (
		<>
			<section>
				<div className={styles.static}>
					<header>
						<div className={styles.header_container}>
							{/* logo */}
							<div className={styles.logo_container}>
								<Link to="/">
									<img
										src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
										alt="amazon logo"
									/>
								</Link>

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
								<input
									type="search"
									name=""
									id=""
									placeholder="Search Amazon"
								/>
								<div className={styles.search_icon_container}>
									<BsSearch size={20} />
								</div>
							</div>
							<div className={styles.order_container}>
								<Link to="/language" className={styles.language}>
									<img
										width={60}
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
										alt=""
									/>
									<select name="" id="">
										<option value="">EN</option>
									</select>
								</Link>

								<Link to={!user && "/auth"}>
									<div>
										<div>
											{user ? (
												<>
													<p>Hello {user?.email.split("@")[0]}</p>
													<span onClick={() => auth.signOut()}>Sign Out</span>
												</>
											) : (
												<>
													<p>Sign In</p>
													<span>Acount & Lists</span>
												</>
											)}
										</div>
									</div>
								</Link>
								<Link to="/orders">
									<div>
										<p>Returns</p>
										<span>& Orders</span>
									</div>
								</Link>
								{/* cart */}
								<Link to="/cart" className={styles.cart}>
									<BiCart size={35} />
									<span>{totalItem}</span>
								</Link>
							</div>
						</div>
					</header>
					<LowerHeader />
				</div>
			</section>
		</>
	);
};

export default Header;
