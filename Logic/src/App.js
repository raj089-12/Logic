
import React from 'react'
import Logic from './component/Logic'
import Industry from './component/Industry'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Location from './component/Location'



const App = () => {
  return (
    <div>
    {/* <Logic/> */}
    
     <Router> 
    
   <Logic/>
   
  <Routes> 
   
  {/* <Route path='/Logic' element={<Logic/>}></Route> */}
   
    <Route path='/Location' element={<Location/>}></Route>
    <Route path='/Industry' element={<Industry/>}></Route> 
  
   
    </Routes>
  </Router>

     
    </div>
  )
}

export default App