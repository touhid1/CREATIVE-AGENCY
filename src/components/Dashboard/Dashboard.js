import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
	document.title = "CA | Dashboard";
	return (
		<>
			<Sidebar></Sidebar>
		</>
	);
};

export default Dashboard;
