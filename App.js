import ReactDOM from "react-dom/client";

const id = "123456";

// React Element Example.
const button = (
	<button>{id} :- This is React Element inside React Element.</button>
);

// * React Component Example.
function ReactComponent() {
	return (
		<div>
			<strong>Writing React Element inside React Component:</strong>
			<p>{button}</p>
			<p>The button above is a React Element.</p>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ReactComponent />);
