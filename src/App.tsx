import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Product from "./pages/product/page";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to={"/products"} />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
