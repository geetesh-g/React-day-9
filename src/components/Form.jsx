import { useEffect, useState } from "react";

const initState = {
	username: "",
	password: "",
	country: "",
	isMarried: false,
};

function User() {
	const [formState, setFormState] = useState(initState);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// username.focus();
	}, []);

	const { username, password, country, isMarried } = formState;

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		const val = type === "checkbox" ? checked : value;

		setFormState({ ...formState, [name]: val });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setUsers([...users, formState]);
		setFormState(initState);
	};

	const style = {
		width: 300,
		textAlign: "left",
		margin: "auto",
	};

	console.log("current form state : ", formState);

	return (
		<form action="" style={style} onSubmit={handleSubmit}>
			<h1>Form</h1>
			<label htmlFor="">
				Username :{" "}
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={handleChange}
					value={username}
				/>
			</label>
			<br />
			<br />
			<label htmlFor="">
				Password :{" "}
				<input
					type="text"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					value={password}
				/>
			</label>
			<br />
			<br />
			<label htmlFor="">
				Country :{" "}
				<select name="country" onChange={handleChange} value={country}>
					<option value="india">India</option>
					<option value="china">China</option>
					<option value="usa">USA</option>
					<option value="france">France</option>
					<option value="germany">Germany</option>
				</select>
			</label>
			<br />
			<br />
			<label htmlFor="">
				is Married :
				<input
					type="checkbox"
					name="isMarried"
					onChange={handleChange}
					checked={isMarried}
				/>
			</label>
			<br />
			<br />
			<input type="submit" />
		</form>
	);
}

export default User;
