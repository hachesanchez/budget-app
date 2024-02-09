import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BudgetsProvider } from './context/BudgetsContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BudgetsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BudgetsProvider>
)
