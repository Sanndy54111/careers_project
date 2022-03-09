import { StrictMode } from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>, document.getElementById('root'))
