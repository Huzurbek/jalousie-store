import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import { Footer } from "./pages/footer/Footer";
import Category from "./pages/category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<h1>about page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
