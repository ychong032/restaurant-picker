import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants }) => {
	const restaurantElements = restaurants.map((data) => (
		<Restaurant restaurant={data} key={data.name} />
	));

	return (
		<div className="grid grid-cols-2 gap-4 px-32 grid-rows-1 auto-rows-fr">
			{restaurantElements}
		</div>
	);
};

export default Restaurants;
