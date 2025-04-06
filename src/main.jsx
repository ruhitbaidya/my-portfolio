import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import UserAuth from "./UserAuth/UserAuth.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import BlogDetails from "./Components/Blog/BlogDetails.jsx";
import ProjectDetails from "./Components/Projects/ProjectDetails.jsx";
import Root from "./Components/Root/Root.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import "react-tooltip/dist/react-tooltip.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserAuth>
  </React.StrictMode>
);
