
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header"
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <div className="page">
      <div lassName="page__content">
<Header isLoggedIn={isLoggedIn}/>
      </div>
   </div>
   
  )
}
export default App;