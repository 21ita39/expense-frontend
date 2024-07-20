
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
      const response = await axios.get("https://expense-backend-1-qpwf.onrender.com/api");
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