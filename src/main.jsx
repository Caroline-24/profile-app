import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModeProvider } from './context/ModeContext.jsx'
import { ProfileProvider } from "./context/ProfileContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeProvider>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </ModeProvider>
);
