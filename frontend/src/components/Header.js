const Header = () => {
	return (
		<div className="flex justify-between px-60 py-4 bg-sky-300">
			<h1 className="text-2xl">Restaurant Picker</h1>
			<nav className="flex items-center gap-8">
				<ul>All restaurants</ul>
				<ul>New restaurant</ul>
			</nav>
		</div>
	);
};

export default Header;
