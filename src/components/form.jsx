import React, { useState } from 'react';

const Form = ({ setCategory, setAmount, handleSubmit, category, amount, isEdit }) => {
    return (
        <form className="add-expense-container" onSubmit={handleSubmit}>
            <h2>Expense Tracker</h2>
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
    );
};

export default Form;