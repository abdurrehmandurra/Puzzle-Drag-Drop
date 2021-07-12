import React from "react";
import classes from "./Title.module.css";

const Title = ({ title }) => {
	return (
		<div className={classes.Title}>
			<h1>{title}</h1>
		</div>
	);
};

export default Title;
