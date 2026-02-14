import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Lists from "./pages/lists";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // opcional: escuta alterações no localStorage (ex: logout em outra aba)
  useEffect(() => {
    const handleStorage = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/lists"
        element={isLoggedIn ? <Lists /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
