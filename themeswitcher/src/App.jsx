import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  //------------------------------------------
   const [themeMode, setThemeMode] = useState("light")
  // to set the function defination of usecontext declare function with same name like here lightTheme
     const lightTheme = ()=>{
        setThemeMode("light")
     }

     const darkTheme = ()=>{ // context api function manipulation 
      setThemeMode("dark")
     }
     //-----------------------------------------

     // actual change in theme 
     useEffect(()=>{
       document.querySelector('html').classList.remove("light","dark"); // remove existing theme
       document.querySelector('html').classList.add(themeMode)
     },
     [themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
    </div>
     </div>
   </ThemeProvider>
  )
}

export default App
