import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-60 py-4 bg-sky-300">
			<NavLink to="/">
				<h1 className="text-2xl font-bold">Restaurant Picker</h1>
			</NavLink>
			<nav>
				<ul className="flex items-center gap-8">
					<li>
						<NavLink
							to="/restaurants"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-blue-700 text-blue-700 "
									: "hover:text-blue-500"
							}>
							All restaurants
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-blue-700 text-blue-700"
									: "hover:text-blue-500"
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
