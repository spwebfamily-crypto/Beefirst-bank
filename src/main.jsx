import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts.css";

const App = React.lazy(() => import("./App-new.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#212529" }} aria-hidden="true" />}>
    <App />
  </React.Suspense>
);
