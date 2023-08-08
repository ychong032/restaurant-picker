import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants, onDelete, onUpdate }) => {
	const restaurantElements = restaurants.map((data) => (
		<Restaurant
			restaurant={data}
			key={data.name}
			isEditable={true}
			onDelete={onDelete}
			onUpdate={onUpdate}
		/>
	));

	return (
		<>
			<div className="flex self-start items-center justify-center bg-gray-200 p-4 rounded-md gap-4">
				<p>Filter by cuisine:</p>
				<select
					name="cuisine"
					required
					placeholder="Cuisine"
					className="px-1 py-1 rounded-md">
					<option>Chinese</option>
					<option>Indian</option>
					<option>Fast Food</option>
					<option>Italian</option>
					<option>Japanese</option>
					<option>Korean</option>
					<option>Local</option>
					<option>Malay</option>
					<option>Thai</option>
					<option>Vietnamese</option>
					<option>Western</option>
				</select>
			</div>
			<div className="w-full grid grid-cols-2 gap-4 grid-rows-1 auto-rows-fr">
				{restaurantElements}
			</div>
		</>
	);
};

export default Restaurants;
