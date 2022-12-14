
import React,{ useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1d0642';
      showAlert("Dark mode is enabled" ,  "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled" ,  "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "Textutils2" mode={mode} toggleMode={toggleMode} aboutText = "aboutus" />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Switch>
      <Route exact path='/about' component={About}>
        <About mode = {mode} />
      </Route>
      <Route exact path="/home">
        <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode = {mode}/>
      </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
