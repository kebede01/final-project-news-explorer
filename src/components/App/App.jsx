
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header"
import About from "../About/About.jsx";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <div className="page">
      <div lassName="page__content">
        <Header isLoggedIn={isLoggedIn} />
      <About/>
      </div>
   </div>
   
  )
}
export default App;