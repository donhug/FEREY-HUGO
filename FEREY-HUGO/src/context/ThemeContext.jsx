import {createContext, useEffect, useState} from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const preferesDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useState(preferesDark ? 'dark' : 'light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;