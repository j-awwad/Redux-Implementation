import React from "react"
import { Provider } from "react-redux"
import Store from "./redux/store"
import { Test } from "./components/test"

function App() {


  return (
    <>
      <div>
      <Provider store={Store}>
          <Test/>
      </Provider>
   
     </div>
    </>
  )
}

export default App
