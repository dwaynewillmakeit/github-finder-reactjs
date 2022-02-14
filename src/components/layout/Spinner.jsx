import React from "react";
import spinner from "./assests/spinner.gif";

const Spinner = () => {
	return (
		<div className="w-100 mt-20 ">
			<img
				with={180}
				src={spinner}
				alt="Loading"
				className="text-center mx-auto"
			/>
		</div>
	);
};

export default Spinner;
