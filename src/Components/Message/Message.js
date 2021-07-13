import React from "react";
import classes from "./Message.module.css";

export const Error = ({ children }) => {
	return (
		<div className="alert alert-danger w-50 mx-auto my-2 " role="alert">
			{children}
		</div>
	);
};

export const PopOver = ({ closeMsg }) => {
	return (
		<div className={"alert alert-success w-50 mx-auto my-2 " + classes.PopOver} role="alert">
			<strong>Welcom to the team</strong>
			<button type="button" onClick={closeMsg} className="close">
				{/* &times; */}
				close
			</button>
		</div>
	);
};
