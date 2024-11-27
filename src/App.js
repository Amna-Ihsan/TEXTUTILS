
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from  './components/About'
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null) //Alert is an object
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }
  
  }
  return (
   <>

{/* <Navbar title="TextUtils" textAbout="About TextUtils"/> */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" textAbout="About"  mode={mode} toggleMode={toggleMode}/>
<Alert Alert={alert}/>

<div className="container my-3">
  {/* <Routes> */}

    {/* Its Always a good practice to write ("exact") in react route path because react partially match component like:
     /users -->component 1
     /users/home --> component2 
     if we click on/users/home , somethimes react open /users instead of /users/home */
     }

  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/"> */}
  {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} 
  {/* </Route>  */}
  {/* </Routes> */}
  
</div>
{/* </Router> */}

    </>
  );
}

export default App;
