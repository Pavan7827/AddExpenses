import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
// import DLmode from "./components/DLmode";
import Alert from "./components/Alert";
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

function App(){ 
  const [alert, setAlert] = useState(null);
  const koibhi =(msg , type) =>{
  setAlert({msg:msg, type:type})
  setTimeout ( () =>{
  setAlert(null);
},2000);
}

  const [Mode, setMode] = useState('light');
  const toggleMode =() =>{
    if (Mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = 'grey';
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "grey";
      document.getElementById("exampleFormControlTextarea1").style.color = "white";
      koibhi('success','dark mode')
      document.title= ' Dark mode Enable'
      setInterval(()=>{
        document.title = 'Edtech- text Coverter';
      },2000) 
      setInterval(()=>{
        document.title = 'Install- text Coverter';
      },1500) 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.color = "black";
      koibhi('success','light mode')
      document.title= ' Light mode Enable'
    }
  }
  return(
    <>
  {/* <Router basename='/amitesh'> */}
   <Nav title='Hello' Mode ={Mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className='Container my-3'>
   {/* <Routes> */}
    {/* <Route exact path="/DLmode" element={<DLmode/> }/> */}
    {/* <Route exact path="/amitesh" element={<Form heading='Enter Your Data' koibhi={koibhi}/>}/> */}
    <Form heading='Enter Your Data' koibhi={koibhi}/>
   {/* </Routes> */}
</div>
   {/* </Router> */}
   
    </>
  );
}


export default App;

// dikkat='Hello'