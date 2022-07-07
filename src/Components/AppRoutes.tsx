import { Navigate, Route, Routes } from "react-router-dom";
import { AllProducts } from "./AllProducts";
import { Login } from "./Login";
import { ProductView } from "./ProductView";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/products"} />}></Route>
      <Route path="/products/:productId" element={<ProductView />}></Route>

      <Route path="/products" element={<AllProducts />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
