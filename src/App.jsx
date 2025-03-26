import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FoodsPage from "./pages/FoodsPage";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import FullFoodInfo from "./pages/FullFoodInfo";
import CatagorizedFoodPage from "./pages/CatagorizedFoodPage";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <>
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/foods" element={<FoodsPage />} />
                <Route path="/food/info/:id" element={<FullFoodInfo />} />
                <Route
                    path="/food/category/:category"
                    element={<CatagorizedFoodPage />}
                />
            </Routes>
            <Footer />
            <Toaster />
        </>
    );
};

export default App;
