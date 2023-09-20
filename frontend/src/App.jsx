
import './App.css'
import PropertyPage from './component/propertyPage'
import Navbar from './component/Navbar'
import GetAllData from './component/getAllData'
import UpdateTask from './component/UpdateTask'
import GetData from './component/GetData'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'

function App() {


  return (
    <div className='app'>
   <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/senddata' element ={<PropertyPage/>}/>
      <Route path='/getalldata' element ={<GetAllData/>}/>
       <Route path='updatedata/:id' element ={<UpdateTask/>}/>
      <Route path='getData/:id' element ={<GetData/>}/> 
  


      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
