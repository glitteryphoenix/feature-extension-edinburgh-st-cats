import { Routes, Route } from "react-router-dom";
import AllCats from "./pages/AllCats";
import SingleCat from "./pages/SingleCat";
import AddCat from "./pages/AddCat";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./styles.css";
// import "./index.css";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<AllCats />} />
          <Route path="/cats/:id" element={<SingleCat />} />
          <Route path="/add-cat" element={<AddCat />} />
          {/* Add a page for info on how to indentify a pet cat, feral cat, unwell cat, inc contact details for local Cats Protection or RSPCA etc? */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;





