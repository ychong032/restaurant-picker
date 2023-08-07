const Restaurant = ({ restaurant, isEditable, onDelete }) => {
	const handleDelete = async () => {
		try {
			const response = await fetch(
				`http://localhost:3001/api/restaurants/${restaurant._id}`,
				{ method: "DELETE" }
			);
			onDelete(restaurant._id);

			const json = await response.json();
			alert(json.message);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdate = () => {
		console.log("Handle update triggered");
	};

	const editButtons = (
		<div className="flex gap-2">
			<button onClick={handleUpdate}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);

	return (
		<div className="p-4 bg-gray-200 rounded-md">
			<div className="flex justify-between">
				<h1 className="text-lg font-semibold mb-2">
					{restaurant.name}
				</h1>
				{isEditable && editButtons}
			</div>
			<div className="grid grid-cols-[1fr_4fr] gap-x-6 gap-y-1 mb-1">
				<p>Cuisine:</p>
				<p>{restaurant.cuisine}</p>
				{restaurant.description && (
					<>
						<p>Description:</p>
						<p>{restaurant.description}</p>
					</>
				)}
				{restaurant.area && (
					<>
						<p>Location:</p>
						<p>{restaurant.area}</p>
					</>
				)}
			</div>
			{restaurant.website && (
				<>
					<a
						href={restaurant.website}
						target="_blank"
						rel="noreferrer"
						className="no-underline text-blue-600 hover:text-blue-400 active:text-blue-700">
						Go to website
					</a>
				</>
			)}
		</div>
	);
};

export default Restaurant;
