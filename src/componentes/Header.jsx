import React from "react";
import Home from "./Home"
import About from "./About";
import Dashboard from "./Dashboard";

function Header() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <Home />
        <About />
        <Dashboard />
      </>
    )
  }
  
  export default Header
  