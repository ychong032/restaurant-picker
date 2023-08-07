import { Link } from "react-router-dom";

const Success = () => {
	return (
		<div className="bg-gray-200 p-6 text-center rounded-md">
			<p className="mb-4">Successfully added a new restaurant!</p>
			<Link
				className="border-2 bg-blue-300 p-2 hover:bg-blue-400 active:bg-blue-500 rounded-md"
				to="/restaurants"
				replace="true">
				Back to restaurants
			</Link>
		</div>
	);
};

export default Success;
