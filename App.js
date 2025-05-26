import React from "react";
import ReactDOM from "react-dom/client";
/**
 * // Create Sibiling Elements using React.
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am H1.</h1>
 *      </div>
 *      <div id="child2">
 *          <h2>I am H2.</h2>
 *      </div>
 * </div>
 */

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1", key: 1}, React.createElement("h1", {}, "I jam H1")),
    React.createElement("div", { id: "child2", key: 2}, React.createElement("h2", {}, "I am H2")),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
