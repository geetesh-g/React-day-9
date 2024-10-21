import { useRef, useState } from "react";

function Todo() {
	const inputRef = useRef(null);
	const [text, setText] = useState("");

	const handleClick = () => {
		setText("");
		inputRef.current.focus();
	};

	return (
		<div>
			<input
				ref={inputRef}
				type="text"
				placeholder="Add Todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleClick}>Add Todo</button>
		</div>
	);
}

export default Todo;
