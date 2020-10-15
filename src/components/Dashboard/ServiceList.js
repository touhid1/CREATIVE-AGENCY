import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "./Sidebar";
import defaultImg from "../../images/icons/service5.png";

const ServiceList = () => {
	document.title = "Dashboard | Service List";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	const [serviceList, setServiceList] = useState([]);

	useEffect(() => {
		fetch(`https://afternoon-reaches-35522.herokuapp.com/serviceList?email=${loggedInUser.email}`)
			.then((res) => res.json())
			.then((data) => {
				setServiceList([...data]);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log(serviceList);

	const ListCard = ({ list }) => {
		return (
			<div className="col-lg-5 my-lg-0 my-3">
				<div className="service-list-card">
					<div className="d-flex align-items-center">
						{list.img ? (
							<img src={list.img} alt="service icon" />
						) : (
							<img src={defaultImg} alt="default icon" />
						)}
						<button className="btn btn-secondary btn-sm">Pending</button>
					</div>
					<div className="mt-2">
						<h4>{list.title}</h4>
						<p>{list.description}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="dashboard-wrapper d-flex">
			<Sidebar></Sidebar>
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Service List</h4>
					{loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name.split(" ").slice(0, 1)}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<div className="service-list container-fluid">
						<div className="row">
							{serviceList.length
								? serviceList.map((list) => <ListCard list={list}></ListCard>)
								: "Nothing found, please LOGIN"}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ServiceList;
