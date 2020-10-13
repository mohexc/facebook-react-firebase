import React from 'react'
import Header from "./components/Header"
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import "./App.less"

// Main
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />


      </div>
    </div>
  )
}

export default App
