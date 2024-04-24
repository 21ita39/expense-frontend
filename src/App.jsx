// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from'./components/Header.jsx'
// import Expense from './components/Expense.jsx'
// import { v4 as uuidv4 } from 'uuid';
// import Home from './components/Home.jsx'
// function App() {
//   const [Users,setUsers] = useState([
//     {id: uuidv4(),category:"Groceries",amount:234,date:"08/05/2024"},
//     {id: uuidv4(),category:"Beverages",amount:454,date:"10/04/2024"},
//     {id: uuidv4(),category:"Utility",amount:874,date:"07/06/2024"},
//     {id: uuidv4(),category:"Transportation",amount:800,date:"12/06/2024"},
//     {id: uuidv4(),category:"Snacks",amount:800,date:"13/05/2024"},
// ]);
// const [category,setCategory]=useState([]);
//   Users.map((item)=>{
//     category.includes(item.category)?" ":category.push(item.category);
//   })
//   console.log(category)

//   return (
//     <>
//     <Header />
//     <Home category={category} setCategory={setCategory}/>
//     <Expense Users={Users} setUsers={setUsers}/> 
    
//     </>
//   );
// }
  

// export default App;




import './App.css';

import { v4 as uuidv4 } from 'uuid';
import React,{useEffect,useState}from 'react';
import Home from './components/Home.jsx';
import Form from './components/form.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import Expense from './components/Expense.jsx';
function App() {
  
  const [expense,setExpense]=useState(null);
useEffect(()=>{
  const fetchData = async() =>{
    try{
      const response = await axios.get("https://expense-backend-nb0q.onrender.com/api");
      setExpense(response.data);

    }
    catch(error){
      console.error(error);
    }
  };
  fetchData();
},[]);
console.log(expense);
  const [category,setCategory]=useState([]);
  expense?.map((item)=>{
    category.includes(item.category)?" ":category.push(item.category);
  })
  console.log(category)


  return (
    <>
    
    {/* <Header/> */}
    {/* <Home category={category} setCategory={setCategory}/> */}
    <Expense expense={expense} setExpense={setExpense}/> 
    {/* <Form/> */}
    
      
      
    </>
  )
}

export default App;