import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Toaster} from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Theme } from './context/theme.context.jsx';
import App from './App.jsx'
import { Authcontext } from './context/auth.login.jsx';
const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false
        }
    }
})
createRoot(document.getElementById('root')).render(
           <QueryClientProvider client={queryClient}>
            <Toaster></Toaster>
    <Authcontext>
 <Theme>
    <App />
</Theme>
</Authcontext>
</QueryClientProvider>
)
