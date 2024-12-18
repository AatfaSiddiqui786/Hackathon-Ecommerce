import Productthings from "./Components/Product things";
import Matter from "./Components/Matter";
import Signup from "./Components/Signup";
import { Hero } from "./Components/Hero";
import Branded from "./Components/Branded";
import Things from "./Components/Things";



export default function Home() {
  return (
    <div>
      
      <Hero />
      <Branded />
       <Things />
       <Productthings />
      <Signup/>
      <Matter/> 
    

    </div>
  );
}
