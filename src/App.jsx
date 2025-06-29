import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Home />
            <ScrollToTopButton />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
