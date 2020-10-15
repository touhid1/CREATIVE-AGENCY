import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import "./Hero.css";
import heroFrame from "../../../images/frame.png";

const Hero = () => {
	return (
		<section className="hero-section pt-4">
			<div className="container">
				<NavMenu></NavMenu>
				<div className="hero-content pt-5">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="hero-txt text-left pr-xl-5">
								<h2>Let’s Grow Your Brand To The Next Level</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis
									laoreet maecenas. Feugiat{" "}
								</p>
								<button className="btn btn-dark">Hire Us</button>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-thumb">
								<img src={heroFrame} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
