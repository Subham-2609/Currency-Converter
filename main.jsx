import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Practice from './Practice.jsx'
import App from './App.jsx'
import Converter from './Converter.jsx'
import useCurrencyInfo from './Currency.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Converter/>
  </StrictMode>,
)
