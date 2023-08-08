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
			icon: "🗑️",
		}
	);
}

export function showUpdateNotification(name) {
	toast.success(
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
		}
	);
}
