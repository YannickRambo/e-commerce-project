import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Shop } from "./pages/Shop/Shop"
import { Register } from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
import { Cart } from "./pages/Cart/Cart"
import { AuthProvider } from "./contexts/AuthContext"
import { ProductInfo } from "./pages/ProductInfo/ProductInfo"
import { Navbar } from "./components/Navbar/Navbar"
import { CartProvider } from "./contexts/CartContext"
import { Footer } from "./components/Footer/Footer"
import { NotFound } from "./pages/NotFound/NotFound"

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Shop />} />
              <Route path="/shopping-cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="products/:productId" element={<ProductInfo />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App


