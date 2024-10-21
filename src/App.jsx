import "./App.css";
import Counter from "./components/stateVSref";
import Todo from "./components/realUse";
import Timer from "./components/Timer";
import User from "./components/Form";

import { useState } from "react";

function App() {
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<div className="App">
			{/* <Counter />
			<Todo /> */}
			{show && <Timer />}
			<button onClick={toggleShow}>{show ? "HIDE TIMER" : "SHOW TIMER"}</button>
			{/* <User /> */}
		</div>
	);
}

export default App;
