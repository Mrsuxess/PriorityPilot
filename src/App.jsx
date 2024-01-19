import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Added } from "./component/added";
import {Add} from "./component/add";
import { Auth } from './component/auth';

function App() {
  
  return (
    <div>
   
      
      <Router>
        <Routes>
          <Route path = '/' element= {<Auth />}  />
          <Route path = '/addTask' element = {<Add />} />
          <Route path = '/Task' element = {<Added />} />
        </Routes>
      </Router>

   

    </div>
  )
}

export default App
