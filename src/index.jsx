import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/reset.css'
import './components/common.css'
import './styles/commonStyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
