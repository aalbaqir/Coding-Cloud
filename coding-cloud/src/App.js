import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {

const [cloud, setCloud] = useState(true)

  const onClick=(e)=>{
    e.preventDefault()
    console.log("clicked")
    setCloud(false)


  }
  return (<>
  {/* { setCloud(true)?
  <div onClick={onClick} class="cloud">
   </div> :
   <div onClick={onClick} class="cloud">
   </div>
} */}
   <div onClick={onClick} class="cloud one"></div>
   <div onClick={onClick} class="cloud two"></div>
   <marquee scrollamount="10" > Pull Up On Meh! </marquee>
   <div onClick={onClick} class="cloud three"></div>
   <div onClick={onClick} class="cloud four"></div>
   <div onClick={onClick} class="cloud five"></div>







  </>)
}

export default App;
