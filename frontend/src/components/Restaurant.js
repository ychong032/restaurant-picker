const Restaurant = ({ restaurant }) => {
	return (
		<div>
			<h1>{restaurant.name}</h1>
			<p>{restaurant.cuisine}</p>
			{restaurant.description && <p>{restaurant.description}</p>}
			{restaurant.area && <p>{restaurant.area}</p>}
			{restaurant.website && <p>{restaurant.website}</p>}
		</div>
	);
};

export default Restaurant;
