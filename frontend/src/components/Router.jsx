import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      errorElement: <ErrorPage/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;