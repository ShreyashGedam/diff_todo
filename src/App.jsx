import { Navbar } from "./pages/navbar"
import { Link } from "react-router-dom"
import "./pages/pages.css"
import { Sidebar } from "./components/sidebar"
function App() {
  

  return (
    <div>
      <div className='links'>
        <div><Link to={'/'}>HOME</Link></div>
        <div><Link to='/new'>Add New</Link></div>
        <div><Link to='/summary'>SUMMARY</Link></div>
      </div>
      <div style={{ display : "flex"}}> 
      <Sidebar></Sidebar>
      <Navbar></Navbar> 
      </div>       
    </div>
  )
}

export default App
