import React from "react";
import ReactDOM from "react-dom/client";

const App = React.lazy(() => import("./App-new.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#fafafa" }} aria-hidden="true" />}>
    <App />
  </React.Suspense>
);
