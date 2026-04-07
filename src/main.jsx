import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotificationProvider from "./notification/NotificationProvider.jsx";
import Notifications from "./notification/Notifications.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NotificationProvider>
            <Notifications />
            <App />
        </NotificationProvider>
    </StrictMode>,
)
