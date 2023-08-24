import { useState } from "react";
import ReactModal from "react-modal";
import {
	showServerError,
	showNetworkError,
	showDeleteNotification,
	showUpdateNotification,
} from "../util/notification";

const Restaurant = ({ restaurant, isEditable, onDelete, onUpdate }) => {
	const [showModal, setShowModal] = useState(false);

	ReactModal.setAppElement("#root");

	const handleDelete = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_ENDPOINT}/${restaurant._id}`,
				{ method: "DELETE" }
			);

			if (response.status === 200) {
				onDelete(restaurant._id);

				showDeleteNotification(restaurant.name);
			} else {
				showServerError();
			}
		} catch (err) {
			showNetworkError();
		}
	};

	const handleUpdate = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const jsonData = JSON.stringify(Object.fromEntries(formData));

		try {
			const response = await fetch(
				`${process.env.REACT_APP_ENDPOINT}/${restaurant._id}`,
				{
					method: "PATCH",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: jsonData,
				}
			);

			if (response.status === 200) {
				const updatedRestaurant = await response.json();
				onUpdate(updatedRestaurant);

				showUpdateNotification(updatedRestaurant.name);
			} else {
				showServerError();
			}
		} catch (err) {
			showNetworkError();
		}

		closeModal();
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const editButtons = (
		<div className="flex gap-2">
			<button
				onClick={openModal}
				title="Edit restaurant"
				className="text-black hover:text-sky-500 active:text-sky-600">
				<i className="fa-regular fa-pen-to-square fa-lg "></i>
			</button>
			<button
				onClick={handleDelete}
				title="Delete restaurant"
				className="text-black hover:text-red-500 active:text-red-600">
				<i className="fa-regular fa-trash-can fa-lg"></i>
			</button>
		</div>
	);

	const viewContainer = (
		<>
			<div className="flex justify-between">
				<h1 className="text-xl font-semibold mb-2">
					{restaurant.name}
				</h1>
				{isEditable && editButtons}
			</div>
			<div className="grid grid-cols-[auto,_1fr] items-center gap-x-4 gap-y-1 mb-1">
				<i className="fa-solid fa-utensils justify-self-center"></i>
				<p>{restaurant.cuisine}</p>
				{restaurant.description && (
					<>
						<i className="fa-solid fa-circle-info justify-self-center"></i>
						<p>{restaurant.description}</p>
					</>
				)}
				{restaurant.area && (
					<>
						<i className="fa-solid fa-location-dot justify-self-center"></i>
						<p>{restaurant.area}</p>
					</>
				)}
				{restaurant.website && (
					<>
						<i className="fa-solid fa-link"></i>
						<a
							href={restaurant.website}
							target="_blank"
							rel="noreferrer"
							className="no-underline text-blue-600 hover:text-blue-400 active:text-blue-700">
							{restaurant.website}
						</a>
					</>
				)}
			</div>
		</>
	);

	const editModal = (
		<ReactModal
			isOpen={showModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			onRequestClose={closeModal}
			style={{
				content: {
					padding: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					rowGap: "1rem",
					width: "fit-content",
					height: "fit-content",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "rgb(229 231 235)",
					borderRadius: "0.375rem",
					border: "none",
				},
				overlay: {
					backgroundColor: "rgb(255, 255, 255, 0.8)",
				},
			}}>
			<h1 className="flex-1 font-semibold text-lg">Update restaurant</h1>
			<form
				onSubmit={handleUpdate}
				className="flex-1 flex flex-col gap-y-4 p-2">
				<input
					type="text"
					name="name"
					defaultValue={restaurant.name}
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
					<option>Chinese</option>
					<option>Dessert</option>
					<option>Fast Food</option>
					<option>French</option>
					<option>Greek</option>
					<option>Indian</option>
					<option>Italian</option>
					<option>Japanese</option>
					<option>Korean</option>
					<option>Local</option>
					<option>Malay</option>
					<option>Mexican</option>
					<option>Thai</option>
					<option>Vietnamese</option>
					<option>Western</option>
				</select>
				<textarea
					name="description"
					rows="3"
					cols="50"
					maxLength={140}
					defaultValue={restaurant.description}
					placeholder="Description (optional)"
					autoComplete="off"
					className="resize-none px-2 py-1 rounded-md"></textarea>
				<input
					type="text"
					name="area"
					defaultValue={restaurant.area}
					placeholder="Location (optional)"
					className="px-2 py-1 rounded-md"
					autoComplete="off"></input>
				<input
					type="url"
					name="website"
					defaultValue={restaurant.website}
					placeholder="Website (optional)"
					pattern="https://.*"
					className="px-2 py-1 rounded-md"
					autoComplete="off"></input>
				<button
					type="submit"
					className="px-1 py-2 bg-green-400 hover:bg-green-500 active:bg-green-600 rounded-md">
					Done
				</button>
			</form>
		</ReactModal>
	);

	return (
		<>
			<div className="p-4 bg-gray-100 rounded-md border-solid border-2 border-gray-500">
				{viewContainer}
			</div>
			{editModal}
		</>
	);
};

export default Restaurant;
