import "./App.css";
import Header from "./Components/Header.jsx";

import CoinTable from "./Components/CoinTable.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewSave from "./Components/ViewSave.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<CoinTable />} />
        <Route path="/view" element={<ViewSave />} />
      </Routes>
    </Router>
  );
}

export default App;
