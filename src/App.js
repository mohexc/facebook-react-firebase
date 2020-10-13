import React from 'react'
import Header from "./components/Header"
import Sidebar from './components/Sidebar'
import "./App.less"

// Main
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />

      </div>
    </div>
  )
}

export default App
