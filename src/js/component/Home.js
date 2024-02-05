import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Title from "./Title.js";
import Navbar from "./Navbar.js";
import Cards from "./Cards.js";
import Footer from "./Footer.js";
//create your first component

const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Title/>
			<Cards/>
			<Footer/>

		</div>
	);
};

export default Home;
