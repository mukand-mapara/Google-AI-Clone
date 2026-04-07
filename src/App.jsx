import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/main/Home'
import "./App.css"
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App