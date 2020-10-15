import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";

const Review = () => {
	document.title = "Dashboard | Review";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const [review, setReview] = useState([]);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		data.img = loggedInUser.photoURL;
		fetch("https://afternoon-reaches-35522.herokuapp.com/addReview", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((success) => console.log(success))
			.catch((error) => console.log(error));
	};

	return (
		<div className="dashboard-wrapper d-flex">
			<Sidebar></Sidebar>
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Reviews</h4>
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
					<form className="order-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<input
								type="text"
								name="author"
								className="form-control"
								placeholder="Your name "
								ref={register({ required: true })}
							/>
							{errors.author && <span className="text-danger">Valid name is required</span>}
						</div>
						<div className="form-group">
							<input
								type="text"
								name="designation"
								className="form-control"
								placeholder="Company’s name, Designation"
								ref={register({ required: true })}
							/>
							{errors.designation && <span className="text-danger">Valid designation is required</span>}
						</div>
						<div className="form-group">
							<textarea
								name="message"
								className="form-control"
								placeholder="Write your review"
								style={{ height: "112px" }}
								ref={register({ required: true })}
							/>
							{errors.message && <span className="text-danger">Valid message is required</span>}
						</div>
						<button type="submit" className="btn btn-dark">
							Send
						</button>
					</form>
				</main>
			</div>
		</div>
	);
};

export default Review;
