import React, { useState } from "react";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import PuzzleBox from "./Components/Box/Box";
import Title from "./Components/Title/Title";
import Message from "./Components/Error/Error";
import classes from "./App.module.css";

function App() {
	const [input, setInput] = useState("");
	const [box, setBox] = useState([]);
	const [dragId, setDragId] = useState();
	const [dropId, setDropId] = useState();
	const [message, setMessage] = useState(null);
	var boxes = [];
	var bgColor = "white";

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
			setTimeout(() => setMessage(null));
		}
		var randomNumber = 0;
		let arr = [];
		for (let i = 1; i <= input * input; i++) {
			arr.push(i);
		}
		console.log(arr);
		let i = arr.length;
		console.log(i);
		while (i--) {
			randomNumber = Math.floor(Math.random() * (i + 1));
			boxes.push(arr[randomNumber]);
			arr.splice(randomNumber, 1);
		}

		console.log(boxes);
		setBox([...box, ...boxes]);
		setInput("");
	};

	//arrayMove.js
	// const arrayMoveMutate = (array, from, to) => {
	// 	array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
	// };

	// const arrayMove = (array, from, to) => {
	// 	array = array.slice();
	// 	arrayMoveMutate(array, from, to);
	// 	return array;
	// };

	// const SortEnd = ({ oldIndex, newIndex }) => {
	// this.setState(({ items }) => ({
	// 	items: arrayMove(items, oldIndex, newIndex),
	// }));

	// 	setBox(arrayMove(box, oldIndex, newIndex));
	// };

	// const dragEnd = (result) => {
	// 	if (!result.destination) {
	// 		return;
	// 	}
	// 	const content = reorder(content, result.source.index, result.destination.index);
	// 	this.setState({ content });
	// };

	// const reorder = (list, startIndex, endIndex) => {
	// 	const result = Array.from(list);
	// 	const [removed] = result.splice(startIndex, 1);
	// 	result.splice(endIndex, 0, removed);
	// 	return result;
	// };

	const drop = (e, value) => {
		e.preventDefault();
		bgColor = "green";
		console.log("Drop Box", bgColor);

		const dragIndex = (element) => element === dragId;
		const dropIndex = (element) => element === dropId;
		const drag = box.findIndex(dragIndex);
		const drop = box.findIndex(dropIndex);

		[box[drag], box[drop]] = [box[drop], box[drag]];

		console.log(" Drag index " + drag);
		console.log(" Drop Index " + drop);
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
		console.log(box);
	};

	const DragOver = (e, value) => {
		e.preventDefault();
		bgColor = "red";
		setDropId(value);
		// e.stopPropagation();
	};

	const dragStart = (e, value) => {
		bgColor = "red";
		setDragId(value);
	};

	return (
		<div className={classes.Puzzle}>
			<Title title="Puzzle Box" />
			{message && <Message>{message}</Message>}
			<div className={classes.upperBox}>
				<Input type="number" input={input} onChange={changeHandler} />
				<Button type="submit" onClick={submit} />
			</div>
			<div style={Box}>
				{box.map((value) => (
					// <div
					// 	style={{ backgroundColor: bgColor }}
					// 	draggable={true}
					// 	onDrop={(e) => drop(e, value)}
					// 	onDragStart={(e) => dragStart(e, value)}
					// 	onDragOver={(e) => DragOver(e, value)}
					// 	className={classes.Boxes}
					// 	key={value}
					// 	id={value}
					// >
					// 	{value}
					// </div>
					<PuzzleBox
						key={value}
						drop={(e) => drop(e, value)}
						dragStart={(e) => dragStart(e, value)}
						dragOver={(e) => DragOver(e, value)}
						id={value}
						bgColor={bgColor}
					>
						{value}
					</PuzzleBox>
				))}
			</div>
		</div>
	);
}

export default App;
