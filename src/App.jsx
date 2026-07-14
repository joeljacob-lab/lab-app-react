import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddData from "./components/AddData";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<AddData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;