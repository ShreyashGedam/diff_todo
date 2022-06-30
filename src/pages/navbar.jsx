import { Route, Routes } from "react-router-dom"
import { Newtask } from "./newTask"
import "./pages.css"
import { Home} from "./home"
import { Summary } from "./summary"

export const Navbar = () => {

    return (
        <div className="navbar">
            <Routes>
                <Route path="/new" element={<Newtask></Newtask>}>MAIN</Route>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/summary" element={<Summary></Summary>}></Route>
            </Routes>

        </div>
    )
}