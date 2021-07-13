import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
	return <div onClick={props.close} className={classes.Backdrop}></div>;
};

export default Backdrop;
