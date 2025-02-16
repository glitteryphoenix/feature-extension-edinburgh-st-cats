// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AllCats from "./pages/AllCats";
// import SingleCat from "./pages/SingleCat";
// import AddCat from "./pages/AddCat";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Router>
//       <nav>
//         <h1>🐱 Cat Explorer</h1>
//         <ul>
//           <li><Link to="/">All Cats</Link></li>
//           <li><Link to="/add-cat">Add a Cat</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<AllCats />} />
//         <Route path="/cats/:id" element={<SingleCat />} />
//         <Route path="/add-cat" element={<AddCat />} />
//         <Route path="*" element={<NotFound />} /> {/* Handles unknown routes */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import AllCats from "./pages/AllCats.jsx";
import SingleCat from "./pages/SingleCat.jsx";
import AddCat from "./pages/AddCat.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<AllCats />} />
        <Route path="/cats/:id" element={<SingleCat />} />
        <Route path="/add-cat" element={<AddCat />} />
      </Routes>
    </div>
  );
}

export default App;


