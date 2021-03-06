import React, { useState } from "react";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import PuzzleBox from "./Components/Box/Box";
import Title from "./Components/Title/Title";
import { Error, PopOver } from "./Components/Message/Message";
import classes from "./App.module.css";

function App() {
	const [input, setInput] = useState("");
	const [box, setBox] = useState([]);
	const [dragId, setDragId] = useState();
	const [dropId, setDropId] = useState();
	const [message, setMessage] = useState(null);
	const [popOver, setPopOver] = useState(false);
	var boxes = [];

	const Box = {
		display: "grid",
		gap: "20px",
		padding: "20px",
		gridTemplateColumns: `repeat(${input} , auto)`,
		margin: "40px auto",
		width: "50%",
		borderRadius: "5px",
		border: "1px solid #ced4da",
	};

	const changeHandler = (e) => {
		setBox([]);
		setInput(e.target.value);
	};

	const submit = () => {
		if (input === "") {
			setMessage("Enter Inter value please");
			setTimeout(() => {
				setMessage(null);
			}, 1500);
		}

		let randomNumber = 0;
		let arr = [];
		for (let i = 1; i <= input * input; i++) {
			arr.push(i);
		}

		console.log(arr);
		let i = arr.length;
		while (i--) {
			randomNumber = Math.floor(Math.random() * (i + 1));
			boxes.push(arr[randomNumber]);
			arr.splice(randomNumber, 1);
		}

		console.log(boxes);
		setBox([...box, ...boxes]);
		setInput("");
	};

	const drop = (e) => {
		e.preventDefault();

		const dragIndex = (element) => element === dragId;
		const dropIndex = (element) => element === dropId;
		const drag = box.findIndex(dragIndex);
		const drop = box.findIndex(dropIndex);

		[box[drag], box[drop]] = [box[drop], box[drag]];

		// console.log(" Drag index " + drag);
		// console.log(" Drop Index " + drop);
		// console.log(boxes);
		// console.log(box);

		// console.log("drag ID" + dragId);
		// console.log("drop ID" + dropId);

		// const dragBox = box.find((box) => box === dragId);
		// const dropBox = box.find((box) => box === dropId);
		// console.log(dragBox);
		// console.log(dropBox);

		// const dragBoxOrder = drag;
		// const dropBoxOrder = drop;

		// const newBoxState = box.map((box) => {
		// 	if (drag === dragId) {
		// 		drag = dropBoxOrder;
		// 	}
		// 	if (drag === e.currentTarget.id) {
		// 		drag = dragBoxOrder;
		// 	}
		// 	return box;
		// });

		setBox([...box]);

		let sortArray = [...box];
		sortArray.sort((a, b) => a - b);

		// console.log("Box : " + box);
		// console.log("Sort : " + sortArray);

		if (JSON.stringify(box) === JSON.stringify(sortArray)) {
			setTimeout(() => {
				setPopOver(true);
			}, 500);
		}
	};

	const dragOver = (e, value) => {
		e.preventDefault();
		setDropId(value);
	};

	const dragStart = (value) => {
		setDragId(value);
	};

	const closeMessage = () => {
		setPopOver(false);
	};

	return (
		<div className={classes.Puzzle}>
			<Title title="Puzzle Box" />
			{popOver ? <PopOver close={closeMessage} closeMsg={closeMessage} /> : false}
			{message ? <Error>{message}</Error> : null}
			<div className={classes.upperBox}>
				<Input type="number" input={input} onChange={changeHandler} />
				<Button type="submit" onClick={submit} />
			</div>
			<div style={Box}>
				{box.map((value) => (
					<PuzzleBox
						key={value}
						drop={drop}
						dragStart={(e) => dragStart(value)}
						dragOver={(e) => dragOver(e, value)}
						id={value}
					>
						{value}
					</PuzzleBox>
				))}
			</div>
		</div>
	);
}

export default App;
