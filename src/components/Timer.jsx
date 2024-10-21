import { useState, useRef, useEffect } from "react";

const fixTimer = (time) => {
	const second = time % 60;
	const minute = Math.floor(time / 60);
	return (
		<>
			{fixMinSec(minute)}
			<small>min</small>: {fixMinSec(second)}
			<small>sec</small>
		</>
	);
};

const fixMinSec = (inpVal) => {
	return inpVal < 10 ? `0${inpVal} ` : `${inpVal} `;
};

fixTimer(200);

function Timer() {
	const [count, setCount] = useState(200);
	useEffect(() => {
		const cleanup = () => {
			stopTimer();
		};
		return cleanup;
	}, []);
	let timerRef = useRef(null);

	const startTimer = () => {
		if (timerRef.current !== null) {
			return;
		}
		timerRef.current = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount <= 1) {
					clearInterval(timerRef.current);
					return 0;
				}
				return prevCount - 1;
			});
		}, 1000);
	};

	const stopTimer = () => {
		// console.log("inside stop timer");
		clearInterval(timerRef.current);
		timerRef.current = null;
	};

	const resetTimer = () => {
		console.log("indide reset");
		stopTimer();
		setCount(200);
	};

	return (
		<div style={{ fontFamily: "sans-serif" }}>
			<h1>{fixTimer(count)}</h1>
			<button onClick={startTimer}>START</button>
			<button onClick={stopTimer}>STOP</button>
			<button onClick={resetTimer}>RESET</button>
			<br />
			<br />
		</div>
	);
}

export default Timer;
