import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/Global.styled.ts'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>,
)
