
import './App.css';
import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
// import MyForm from './Componenets/MyForm';
import  React, { useState } from 'react';
import Alert from './Componenets/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const togglemode = ()=> {
     if (mode === 'light')
        {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode Enabled","success");
        
        
       }
       else
       {
         
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode Enabled","success");
           
       }

  }

  



  const showAlert = (message, type)=>{
  
     setAlert({
      msg : message,
      type : type
     })
     setTimeout ( ()=>{
        setAlert(null)

     } , 1000)
  }

  return (
    <>  
       
          <BrowserRouter>
        <Navbar
          title="TextSite"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact
              path="/"
              element={
               <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;



