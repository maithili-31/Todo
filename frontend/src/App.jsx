import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import AddNote from './components/AddNote'
import Home from './components/Home'
import EditTask from './components/EditTask'

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <AddNote/> */}
      <Home/>
      <EditTask/>
    </>
  )
}

export default App
