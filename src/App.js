// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Contact from './Components/Contact';
import React ,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
  // Link
} from "react-router-dom";



function App() {

  const[mode,setmode]=useState("light")
  const[nav,setnav]=useState("light")
  const[btntext,setbtntext]=useState("Enable Dark MOde")


  const togglemode=()=>{
    if(mode ==="light"){
      setmode("dark");
      setnav("dark");
      showAlert("The dark mode has been Set","success");
      setbtntext("Enable Light MOde");

    }else{
      setmode("light");
      setnav("light")
      showAlert("The light mode has been Set","success");
      setbtntext("Enable Dark MOde")
    }

  }


  // dismissing alert message//

  const[alert , setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

    
  return (
    <>
    <Router>
    <Navbar title="Home" nav={nav} contactText="Contact Us"/>
    <Alert alert={alert}/>



    
        <Routes>
              <Route path="/about" element={<About />} >
                
              </Route>
              <Route path="/contact" element={<Contact />} >
                
              </Route>
              
              <Route path="/" element={<Textform showAlert={showAlert} btntext={btntext}  mode={mode} togglemode={togglemode} />} >
                
                
              </Route>
        </Routes>

    </Router>
    
      
    

    </>

    
  );
}

export default App;
