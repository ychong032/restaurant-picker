import { useNavigate } from "react-router-dom";
import {
	showServerError,
	showNetworkError,
	showCreateNotification,
} from "../util/notification";

const Create = ({ onCreate }) => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const jsonData = JSON.stringify(Object.fromEntries(formData));

		try {
			const response = await fetch(process.env.REACT_APP_ENDPOINT, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: jsonData,
			});

			if (response.status === 200) {
				const newRestaurant = await response.json();
				onCreate(newRestaurant);

				showCreateNotification(newRestaurant.name);

				navigate("/restaurants");
			} else {
				showServerError();
			}
		} catch (err) {
			showNetworkError();
		}
	};

	return (
		<div className="bg-gray-100 p-4 text-center flex flex-col gap-y-4 rounded-md border-solid border-2 border-gray-400">
			<h1 className="font-semibold text-xl">Add a new restaurant</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-y-4 p-2">
				<input
					type="text"
					name="name"
					required
					placeholder="Name of restaurant"
					className="px-2 py-1 rounded-md"
					autoComplete="off"></input>
				<select
					name="cuisine"
					required
					placeholder="Cuisine"
					className="px-1 py-1 rounded-md">
					<option value="">--Select a cuisine--</option>
					<option>Brazillian</option>
					<option>Chinese</option>
					<option>Dessert</option>
					<option>Fast Food</option>
					<option>French</option>
					<option>Fusion</option>
					<option>Greek</option>
					<option>Indian</option>
					<option>Italian</option>
					<option>Japanese</option>
					<option>Korean</option>
					<option>Local</option>
					<option>Malay</option>
					<option>Mediterranean</option>
					<option>Mexican</option>
					<option>Russian</option>
					<option>Spanish</option>
					<option>Thai</option>
					<option>Turkish</option>
					<option>Vietnamese</option>
					<option>Western</option>
				</select>
				<textarea
					name="description"
					rows="3"
					cols="50"
					maxLength={140}
					placeholder="Description (optional)"
					autoComplete="off"
					className="resize-none px-2 py-1 rounded-md"></textarea>
				<input
					type="text"
					name="area"
					placeholder="Location (optional)"
					className="px-2 py-1 rounded-md"
					autoComplete="off"></input>
				<input
					type="url"
					name="website"
					placeholder="Website (optional)"
					pattern="https://.*"
					className="px-2 py-1 rounded-md"
					autoComplete="off"></input>
				<button
					type="submit"
					className="px-1 py-2 bg-green-400 hover:bg-green-500 active:bg-green-600 rounded-md">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
