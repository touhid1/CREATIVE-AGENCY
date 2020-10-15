import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
	const testimonialData = [
		{
			img: customer1,
			author: "Nash Patrik",
			designation: "CEO, Manpol",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
		},
		{
			img: customer2,
			author: "Miriam Barron",
			designation: "CEO, Manpol",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
		},
		{
			img: customer3,
			author: "Bria Malone",
			designation: "CEO, Manpol",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
		},
	];

	const [reviews, setReviews] = useState([]);

	/* API: Getting Reviews Data on home page */
	useEffect(() => {
		fetch("https://afternoon-reaches-35522.herokuapp.com/home/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className="testimonial py-5 mt-xl-5">
			<div className="container ">
				<h4 className="section-title text-center">
					Clients <span className="brand-green">Feedback</span>
				</h4>
				<div className="testimonial-content py-5">
					<div className="row">
						{reviews.map((testimonial) => (
							<TestimonialCard testimonial={testimonial} key={Math.random()}></TestimonialCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
