import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>


<KindeProvider
		clientId="7d7aa752b0f84e30845bfcb60684cf7b"
		domain="https://devmichoma.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
		 <TodosContextProvider>    
      <App/>
    </TodosContextProvider>
	</KindeProvider>
    
   

  </StrictMode>,
)
