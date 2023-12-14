import react, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
//import Alert from './components/Alert.js';
import Alerti from './components/Alerti.js';


function App() {
  const [mode,setMode]= useState('light');//darkmode enabling
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type,
    })
  }
  const togglemode=()=>{
    if(mode==='light'){
     setMode('dark');
      document.body.style.backgroundColor =`grey`;
      showAlert("Dark mode has been enabled", "Success");
     
      document.title="Text-Util-Dark-Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor =`white`;
      showAlert("Light mode has been enabled", "Success");
      document.title="Text-Util-Light-Mode";
      
    }
  }
  return (
   <>


   <Navbar  mode={mode} togglemode={togglemode}/>
 <Alerti alert={alert}/>
   <div className="container">
  <TextForm heading="String Manupulator- Create,Casing,Reversing" showAlert={showAlert} mode={mode} togglemode={togglemode}></TextForm>
  </div>
  </>
  );
}

export default App;
