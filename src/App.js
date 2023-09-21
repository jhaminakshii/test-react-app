
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
 import TxtForms from './components/TxtForms';
 import {
   BrowserRouter as Router,
   Route,
   Routes,
 } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const handleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#043b72";
      showAlert("Dark Mode has Enabled","success");
      document.title="Text-Editor DarkMode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has Enabled", "success");
      document.title = "Text-Editor LightMode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextEditor" aboutText="About Us" mode={mode} handleMode={handleMode} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
            </Routes>
            <Routes>
          <Route exact path="/" element={ <TxtForms heading="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert} />}/>
        </Routes>
    </Router>

    </>
  );
}

export default App;
