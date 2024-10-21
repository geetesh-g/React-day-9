import { useState, useRef } from "react";

function CounterWithUseRef() {
	const count = useRef(0);
	const handleClikc = () => {
		console.log(count);
		count.current += 1;
	};

	/* 
    here we can clearly see that useRef only refers to a state but it does not re-render the dom 
    and it returns an object which takes an initial value with called current
    it only updates if there any thing happens to the dom
  */

	return (
		<div>
			<h1>Count : {count.current}</h1>
			<button onClick={handleClikc}>ButtonWithUseRef</button>
		</div>
	);
}

function CounterWithUseState() {
	const [count, setCount] = useState(0);
	const handleClikc = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={handleClikc}>ButtonWithUseRef</button>
		</div>
	);
}

function Counter() {
	return (
		<>
			<div>
				<h1>Counter with useRef</h1>
				<CounterWithUseRef />
			</div>
			<div>
				<h1>Counter with useState</h1>
				<CounterWithUseState />
			</div>
		</>
	);
}

export default Counter;
