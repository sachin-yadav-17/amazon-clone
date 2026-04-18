import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./componets/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
import Login from "./pages/login/Login";
import Register from "./register/Register";

function App() {
  return (
    <>
      <ToastContainer/>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;