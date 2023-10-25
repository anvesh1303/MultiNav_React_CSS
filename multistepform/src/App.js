import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import DataContext from './components/DataContext';
import { useState } from 'react';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';


function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    frequency: "monthly",
    plan: "",
    price: null,
    price_frequency: "",
    addons: [],
    addons_price: 0,
    addons_price_frequency: "",
    nameerror: "",
    emailerror: "",
    phoneerror: ""
  })
  return (
    <div className="App">
      <Router>
        <DataContext.Provider value={{data, setData}}>
          
        <Routes>
          <Route path='/' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
          <Route path='/step3' element={<Step3/>}/>
          <Route path='/step4' element={<Step4/>}/>
          <Route path='/step5' element={<Step5/>}/>
        </Routes>
        </DataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
