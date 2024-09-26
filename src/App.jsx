
import './App.css'
import Home from './components/home'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Data from './components/Data'
function App() {

  return (
    
      <>
 

 <HashRouter>
\      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />

      </Routes>
    </HashRouter>
{/* <Home/> */}

      
    </>
  )
}

export default App
