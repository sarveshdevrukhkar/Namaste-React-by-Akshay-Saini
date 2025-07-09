import ReactDOM from "react-dom/client";

const React = () => <code>This is React Component.</code>;

// * Different Methods to render React Component.
function ReactComponent() {
	return (
		<div>
			<h1>Episode 03: Laying the Foundation.</h1>
			<strong>Different Methods/ways to render React Component:</strong>
			<p>Method 1: {"{React()}"}</p> {React()}
			<p>Method 2: {"<React />"}</p> <React />
			<p>Method 3: {"<React></React>"}</p> <React></React>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ReactComponent />);
