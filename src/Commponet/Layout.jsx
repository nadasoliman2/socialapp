import Navbar from "./navbar"
import { Footer } from "./footer"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"
    

export default function Layout(){
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <>
         < div className=
     {`${theme}  dark:bg-gray-700  dark:text-white flex min-h-screen flex-col justify-between items-center` }>
      <Navbar></Navbar>
    <div className="container p-3">
      <Outlet/>
      </div>
      <Footer></Footer>
      </div>
        </>
    )
}