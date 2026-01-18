import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CollectionCategories from "./pages/CollectionCategories";
import Events from "./pages/Events";
import RealEstate from "./pages/RealEstate";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Offset for fixed navbar */}
      <main style={{ paddingTop: "120px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/collections" element={<Collections />} />

          {/* Collection → categories (Caps / Clothing / Shoes) */}
          <Route
            path="/collections/:collectionName"
            element={<CollectionCategories />}
          />

          <Route path="/events" element={<Events />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
