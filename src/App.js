
import './App.css';
import Navbar from './components/Navbar';
import TxtForms from './components/TxtForms';

function App() {
  return (
    <>
   <Navbar title="TextEditor" aboutText="About Us" />
    <TxtForms heading = "Enter the Text to Analyze Below" />
    </>
  );
}

export default App;
