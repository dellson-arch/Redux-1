import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from "react-toastify";
import Approutes from './routes/Approutes.jsx';

createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <ToastContainer/>
   <Approutes/>
 </AuthProvider>
)
