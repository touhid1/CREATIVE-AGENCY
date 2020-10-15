import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const Sidebar = () => {
	return (
		<div className="sidebar w-25 h-100 p-4">
			<Link to="/">
				<img src={logo} alt="" style={{ maxWidth: "150px" }} />
			</Link>
			<div className="sidebar-buttons pt-5">
				<Link to="/dashboard/orders" className="btn">
					<i className="fas fa-shopping-cart"></i>
					<span>Orders</span>
				</Link>
				<Link to="/dashboard/service-list" className="btn">
					<i className="fas fa-shopping-basket"></i>
					<span>Service list</span>
				</Link>
				<Link to="/dashboard/review" className="btn">
					<i className="fas fa-comment-dots"></i>
					<span>Review</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
