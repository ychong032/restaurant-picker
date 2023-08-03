import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Restaurants from "./Restaurants";
import Create from "./Create";

const Body = () => {
	return (
		<div className="flex flex-1 items-center justify-center">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/restaurants" element={<Restaurants />} />
				<Route path="/create" element={<Create />} />
			</Routes>
		</div>
	);
};

export default Body;
