import React from 'react'
import Header from "./components/Header"
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import "./App.less"
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useAuthContext } from './context/AuthContext'

// Main
const App = () => {
  const { user } = useAuthContext()


  return (!user
    ? <Login />
    : (
      <div className="app" >
        <Header />
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    ))
}

export default App
