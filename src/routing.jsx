import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about us/AboutUs";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/Privacy&Policy/Privacy";
import BlogsComponent from "./pages/Blogs/Blogs";
import Services from "./pages/Services/Services";
import ContactList from "./pages/Contact/ContactList";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      {path:"services", element:<Services/>},
      {
        path: "blogs",
        element: <BlogsComponent />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"getdetails",
        element:<ContactList/>,
      }
    ],
  },
]);
export default routing;
