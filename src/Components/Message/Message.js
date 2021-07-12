import React from "react";
import classes from "./Message.module.css";

export const Error = ({ children }) => {
	return (
		<div className="alert alert-danger w-50 mx-auto my-2 " role="alert">
			{children}
		</div>
	);
};

export const PopOver = () => {
	return (
		<div className={"alert alert-success w-50 mx-auto my-2 " + classes.PopOver} role="alert">
			Welcom to the team
		</div>
	);
};
