import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<Body />
			<Footer />
			<ToastContainer />
		</div>
	);
}
export default App;
