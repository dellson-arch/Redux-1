import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import AppRoutes from './routes/AppRoutes.jsx'
import { store } from './app/store.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <AppRoutes />
  </Provider>
)
