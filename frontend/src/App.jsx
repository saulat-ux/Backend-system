
import './App.css'
import PropertyPage from './component/propertyPage'
import Navbar from './component/Navbar'
import GetAllData from './component/getAllData'
import UpdateTask from './component/UpdateTask'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'

function App() {


  return (
    <div className='app'>
   <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/senddata' element ={<PropertyPage/>}/>
      <Route path='/getalldata' element ={<GetAllData/>}/>
      <Route path=':id' element ={<UpdateTask/>}/>


      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
