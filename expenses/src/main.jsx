import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './theme'
import GlobalState from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </GlobalState>
)