import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/ProductsPage";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;