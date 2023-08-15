import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-60 py-4 bg-blue-950">
			<NavLink to="/">
				<div className="flex gap-2 items-center">
					<i className="fa-solid fa-bowl-rice fa-2xl text-sky-300"></i>
					<h1 className="text-2xl font-bold text-gray-200 hover:text-gray-50">
						Restaurant Picker
					</h1>
				</div>
			</NavLink>
			<nav>
				<ul className="flex items-center gap-8">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-sky-300 text-sky-300 font-semibold"
									: "hover:text-sky-300 font-semibold text-gray-200"
							}>
							Pick a restaurant
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/restaurants"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-sky-300 text-sky-300 font-semibold"
									: "hover:text-sky-300 font-semibold text-gray-200"
							}>
							All restaurants
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create"
							className={({ isActive }) =>
								isActive
									? "border-b-4 border-sky-300 text-sky-300 font-semibold"
									: "hover:text-sky-300 font-semibold text-gray-200"
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
