import React from "react";
import classes from "./Box.module.css";

const Box = (props) => {
	return (
		<div
			style={{ backgroundColor: props.bgColor }}
			draggable={true}
			onDrop={props.drop}
			onDragStart={props.dragStart}
			onDragOver={props.dragOver}
			className={classes.Boxes}
			id={props.id}
		>
			{props.children}
		</div>
	);
};

export default Box;
