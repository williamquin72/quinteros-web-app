import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/programs";
import { Analytics } from "@vercel/analytics/react";
const App=()=> {
  return (
    <div>
<Navbar/>
<Hero/>
<div className="container">
<Programs/>
</div>
    </div>
  )
}
export default App