import React, { useState,useEffect } from 'react';
import './Expense.css'; // Import external CSS file
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Expense = (props)=>{
    const { expense, setExpense } = props;
        console.log({expense})

    // const {category}=useParams();
    const [category,setCategory] = useState("");
    const [Users,setUsers]=useState([
        // {id:uuidv4(),date:"12/4/2024",category:"groceries",amount:"350"},
        // {id:uuidv4(),date:"13/4/2024",category:"beverages",amount:"450"},
        // {id:uuidv4(),date:"15/6/2024",category:"utility",amount:"550"},
        // {id:uuidv4(),date:"15/6/2024",category:"transportation",amount:"600"},
        // {id:uuidv4(),date:"15/6/2024",category:"snacks",amount:"350"},
      ]);
      
    const filteredUsers=Users.filter(user=>user.category===category); 

    useEffect(() => {
        console.log("Category:", category); // Check if category is received correctly
        console.log("Filtered Users:", filteredUsers); // Check if Users are filtered correctly
    }, [category, filteredUsers]);


    const handleDelete = async(id) => {
        const response = await axios.delete(`https://expense-backend-nb0q.onrender.com/api/${id}`)
        const newUser = expense&&expense?.filter((ele) => ele._id !== id);
        setExpense(newUser);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!isEdit){
        
            const response = await axios.post('https://expense-backend-nb0q.onrender.com/api',{ 
                category: category,
                amount: amount,
            });
            setExpense([...expense,response.data]);
            setCategory("");
            setAmount(0);
            
        }
        else {
            const response = await axios.put(`https://expense-backend-nb0q.onrender.com/api/${editId}`,{category,amount})
            console.log(response);
            const updatedArray = expense&&expense?.map((item)=>{
                return item._id === editId ? { ...item,  category,  amount} : item;
        });
            setExpense(updatedArray);
            setIsEdit(false);
            setEditId("");
            setCategory("");
            setAmount(0)
        }
    }

    const handleEdit = (user) => {
        setEditId(user._id);
        setIsEdit(true);
        setCategory(user.category);
        setAmount(user.amount);
    }

    
    const [amount,setAmount] = useState(0);
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState("")

    let sum = 0;
    expense&&expense.map((s) => {
        sum += parseInt(s.amount)
    })

    return (
        <div>
            <h1>{category} Expenses</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                {expense && expense?.map((user,key)=> (
                        <tr>
                            <td>{user.date}</td>
                            <td>{user.category}</td>
                            <td>{user.amount}</td>
                            
                            <td >
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>Rs.{sum}</td>
                    </tr>
                </tbody>
            </table>
            <form className="add-expense-container" onSubmit={(e) => handleSubmit(e)}>
                <h2>Expense Tracker</h2>
                {/* <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option>All</option>
                    <option>Income</option>
                    <option>Savings</option>
                    <option>Fees</option>
                    <option>Loan</option>
                    <option>Rent</option>
                    <option>Grocery</option>
                </select><br /><br /> */}
                        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option>All</option>
                        <option>Groceries</option>
                        <option>Beverages</option>
                        <option>Utility</option>
                        <option>Transportation</option>
                        <option>Snacks</option>
                        </select><br /><br />
                        
                <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} required /><br /><br />
                <button type="submit">{isEdit ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default Expense;
