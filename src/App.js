import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./LogIn/SignIn";
import SignUp from "./LogIn/SignUp";
import ForgotPassword from "./LogIn/ForgotPassword";
import Homepage from "./Homepage/Homepaage";
import Electronics from "./Categorires/Electronics/Electronics";
import Textbooks from "./Categorires/Textbooks/Textbooks";
import Funiture from "./Categorires/Forniture/Forniture";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path ="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/product/electrionics" element={<Electronics />} />
          <Route path="/product/textbooks" element={<Textbooks />} />
          <Route path="/product/funiture" element={<Funiture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

