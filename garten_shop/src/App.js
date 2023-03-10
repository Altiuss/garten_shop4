import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SalePge from "./pages/SalePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:id" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="sale" element={<SalePge />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
