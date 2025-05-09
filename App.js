/**
 * // Create Nested Elements using React.
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1.</h1>
 *      </div>
 * </div>
 */

const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am H1")),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
