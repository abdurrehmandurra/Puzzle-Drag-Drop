import React from "react";
import Classes from "./Button.module.css";

const Button = ({ type, onClick }) => {
	return (
		<>
			<button className={"btn btn-lg " + Classes.Button} type={type} onClick={onClick}>
				Submit
			</button>
		</>
	);
};

export default Button;
