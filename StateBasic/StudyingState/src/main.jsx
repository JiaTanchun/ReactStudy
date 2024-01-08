import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClassComponent from "./ClassComponent.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ClassComponent Username="Chen" age={25}/>
  </React.StrictMode>
)
