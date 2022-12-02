import { createContext, useContext, useReducer } from 'react'
import { helloReducer } from './hello-reducer'

export const HelloContext = createContext()

export const HelloContextProvider = ({ children }) => {
  const [helloState, dispatch] = useReducer(helloReducer, 'Hello Context')
  return (
    <HelloContext.Provider value={{ helloState, dispatch }}>
      {children}
    </HelloContext.Provider>
  )
}

export const useHelloContext = () => useContext(HelloContext)
