
import './App.css'
import PropertyPage from './component/propertyPage'
import Navbar from './component/Navbar'
import GetAllData from './component/getAllData'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'

function App() {


  return (
    <div className='app'>
   <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/senddata' element ={<PropertyPage/>}/>
      <Route path='/getalldata' element ={<GetAllData/>}/>

      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
