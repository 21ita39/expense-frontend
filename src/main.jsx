// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import About from "./About.jsx"
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Expense from './components/Expense.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ToastContainer />
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Expense" element={<Expense />} />
//     </Routes>
//     </BrowserRouter>
    
//   </React.StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./About.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/form.jsx'
import Expense from './components/Expense.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/expense/:category" element={<Expense/>}/>
    </Routes>
  </BrowserRouter>
  

  <ToastContainer/>
  
    
  </React.StrictMode>,
)
