import React from 'react'

export const defaultThemeValue = 'dark'

// context can be primitive value or object
// you can have multiple context objects in your app 
// this is more like a creation and signature of the context 
// the context implementation, e.g. implementation of toggleTheme() function, has to be defined in one top-level component - in our case ParentComponent

const ThemeContext = React.createContext({
    theme: defaultThemeValue,
    toggleTheme: () => {}
})

export default ThemeContext