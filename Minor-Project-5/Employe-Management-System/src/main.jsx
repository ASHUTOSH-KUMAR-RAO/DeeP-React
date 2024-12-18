import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';


// todo => localStorage.clear()  isese basically hamra localStorage mein jo bhi data hota hai wo saab clear ho jata hai 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>

        <App />
    </AuthProvider>
     
  </StrictMode>
);
