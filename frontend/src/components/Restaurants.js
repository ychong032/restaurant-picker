import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants }) => {
	const restaurantElements = restaurants.map((data) => (
		<Restaurant restaurant={data} key={data.name} />
	));

	return <div>{restaurantElements}</div>;
};

export default Restaurants;
