const Restaurant = ({ restaurant }) => {
	return (
		<div className="p-4 bg-gray-200 rounded-md">
			<h1 className="text-lg font-semibold mb-2">{restaurant.name}</h1>
			<div className="grid grid-cols-[1fr_4fr] gap-x-6 gap-y-1">
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
		</div>
	);
};

export default Restaurant;
