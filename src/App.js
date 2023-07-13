import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import Homepage from './Components/Homepage'

// import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Homepage/>} />

          <Route path="/Table" element={<Table/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
