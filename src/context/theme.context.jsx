import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export  const ThemeContext = createContext(null);
export function Theme({children}){
    const [theme ,settheme]= useState(null);
      function toggleTheme(){
        if(theme ==='light'){
            settheme('dark')
            localStorage.setItem('theme','dark')
        }
        else{
          settheme('light')
            localStorage.setItem('theme','light')
        }
    }
 useEffect(()=>{
    if(localStorage.getItem('theme')==='dark')
      settheme('dark')
 })

    return(
       <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
       </ThemeContext.Provider>
    )
}