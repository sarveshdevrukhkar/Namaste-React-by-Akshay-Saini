import ReactDOM from "react-dom/client";

// React Element Example.
const button = <button>This is React Element</button>;

// * React Component Example.
function ReactComponent1() {
	return <kbd>This is React Component example 1.</kbd>;
}

function ReactComponent2() {
	return (
		<div>
			<p>This is React Component Example 2.</p>
			<small>Writing multiple React Elements.</small>
		</div>
	);
}

// Components with Arrow Function.
const ReactComponentArrow1 = () => <p>React Component in Arrow Function 1.</p>;

const ReactComponentArrow2 = () => (
	<p>This is React Component in Arrow Function 2.</p>
);

const ReactComponentArrow3 = () => {
	return <p>This is React Component in Arrow Function 3.</p>;
};

// * React Composition Example.
function ReactComposition() {
	return (
		<div>
			<h3>These are the React Composition Examples:</h3>
			<ReactComponent1 />
			<ReactComponent2 />
			<ReactComponentArrow1 />
			<ReactComponentArrow2 />
			<ReactComponentArrow3 />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<ReactComposition />,
);
