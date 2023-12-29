import { createContext , useContext } from "react";


export const ThemeContext  = createContext(
    {
        themeMode: "Light",
        darkTheme : ()=>{},
        lightTheme: ()=>{},
    }
)


export const ThemeProvider = ThemeContext.Provider


// can also create custom hook 
export default function useTheme(){
    return useContext(ThemeContext)
}