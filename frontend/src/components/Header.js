import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-60 py-4 bg-sky-300">
			<NavLink to="/">
				<div className="flex gap-2 items-center">
					<i className="fa-solid fa-bowl-rice fa-2xl"></i>
					<h1 className="text-2xl font-bold">Restaurant Picker</h1>
				</div>
			</NavLink>
			<nav>
				<ul className="flex items-center gap-8">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-blue-700 text-blue-700 font-semibold"
									: "hover:text-blue-500 font-semibold"
							}>
							Pick a restaurant
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/restaurants"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-blue-700 text-blue-700 font-semibold"
									: "hover:text-blue-500 font-semibold"
							}>
							All restaurants
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-blue-700 text-blue-700 font-semibold"
									: "hover:text-blue-500 font-semibold"
							}>
							New restaurant
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
