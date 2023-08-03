const Body = () => {
	return (
		<div className="flex flex-1 items-center justify-center">
			<div className="bg-gray-200 flex flex-col items-center w-fit p-4 rounded-md gap-4">
				<p>A random restaurant will be displayed here.</p>
				<button className="p-4 rounded-xl bg-sky-200 hover:bg-sky-300 active:bg-sky-400 focus:ring focus:ring-sky-50">
					Get another restaurant
				</button>
			</div>
		</div>
	);
};

export default Body;
