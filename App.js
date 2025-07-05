import ReactDOM from "react-dom/client";

// React Element Example.
const button = <button>This is React Element</button>;

// * React Component Example.
function ReactComponent1() {
	return <kbd>This is React Component example.</kbd>;
}

function ReactComponent2() {
	return (
		<div>
			<p>This is React Component.</p>
			<small>Writing multiple React Elements.</small>
		</div>
	);
}

// Components with Arrow Function.
const ReactComponentArrow1 = () => <p>This is React Component.</p>;

const ReactComponentArrow2 = () => {
	return <p>This is React Component.</p>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<ReactComponent1 />);
