import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroTela, LoginTela } from "../components/Section";
import HomePage from "../pages/HomePage";
import MyRequests from "../pages/MyRequests";
import NotFound from "../pages/NotFound";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/produtos" element={<ProductListingPage />}/>
                <Route path="/produtos/:Id" element={<ProductViewPage />}/>
                <Route path="/pedidos" element={<MyRequests />}/>
                <Route path="/cadastro" element={<CadastroTela />}/>
                <Route path="/login" element={<LoginTela />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;