import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

function App() {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
