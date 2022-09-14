import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import {ResultContextProvider} from './contexts/ResultContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ResultContextProvider>
)
