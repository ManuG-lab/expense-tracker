import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'

//import ExpenseList from './Expense-list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
    
  </StrictMode>,
  
)
