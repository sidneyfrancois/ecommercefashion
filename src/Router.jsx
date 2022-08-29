import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayouts";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
