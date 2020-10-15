import React from "react";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import NavMenu from "../NavMenu/NavMenu";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./HomePage.css";

const HomePage = () => {
	return (
		<>
			<Hero></Hero>
			<Brands></Brands>
			<Services></Services>
			<Projects></Projects>
			<Testimonial></Testimonial>
			<Footer></Footer>
		</>
	);
};

export default HomePage;
