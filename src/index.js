import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routing from "./routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
