import React from "react";
import Classes from "./Input.module.css";

const Input = ({ type, input, onChange }) => {
	return (
		<>
			<input
				type={type}
				className={"form-control form-control-lg " + Classes.Input}
				name="input"
				onChange={onChange}
				value={input}
				placeholder="Enter value"
			/>
		</>
	);
};

export default Input;
