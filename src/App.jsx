import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AddData from "./components/AddData";


function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/add" element={<AddData />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;