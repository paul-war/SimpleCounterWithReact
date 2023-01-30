import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondsCounter seconds={3434} />
		</div>
	);
};

export default Home;
