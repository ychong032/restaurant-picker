import { toast } from "react-toastify";

export function showServerError() {
	toast.error("Server error. Please try again.", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		bodyClassName: "font-raleway",
	});
}

export function showNetworkError() {
	toast.error("Network error. Please try again.", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		bodyClassName: "font-raleway",
	});
}

export function showDeleteNotification(name) {
	toast.info(
		<p>
			Deleted <b>{name}</b>
		</p>,
		{
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			icon: ({ theme, type }) => (
				<i className="fa-regular fa-trash-can fa-lg"></i>
			),
			bodyClassName: "font-raleway",
		}
	);
}

export function showUpdateNotification(name) {
	toast.info(
		<p>
			Updated <b>{name}</b>
		</p>,
		{
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			bodyClassName: "font-raleway",
			icon: ({ theme, type }) => (
				<i className="fa-regular fa-pen-to-square fa-lg"></i>
			),
		}
	);
}

export function showCreateNotification(name) {
	toast.success(
		<p>
			Added <b>{name}</b>
		</p>,
		{
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			bodyClassName: "font-raleway",
		}
	);
}
