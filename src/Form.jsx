import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import ExpenseList from "./Expense-list";
import Search from "./Search";


function Form(){
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e){
         if (name === "" || description === "" || category === "" || date === "") {
            toast.error("Please fill in all fields");
        }
        else(
            toast.success("Expense added successfully!")  
        )
        e.preventDefault()
        setExpenses([...expenses, {name,description,category, amount, date}]);
        setName("");
        setDescription("");
        setCategory("");
        setAmount("");
        setDate("");

        
    }
    console.log("expenses:", expenses);

    return(

        <div className="bg-red-500 grid grid-cols-3 gap-4 mt-10" >
            <div>
            <h1 className="text-xl font-bold underline ml-4 mt-4 mb-4">Fill in your Expenses</h1>
            <form onSubmit={handleSubmit} className="ml-3 mb-10 border border-black-900 rounded-lg bg-gray-500 p-6">
            
                <div>
                    <label htmlFor="name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-500 border border-black-900 focus:ring-black-500 rounded-lg" placeholder=" Ugali , Book, Shoes"/>
                </div>
                <div>
                    <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-500 border border-black-900 focus:ring-black-500 rounded-lg" placeholder=" wednesday lunch"/>
                </div>
                <div>
                    <label htmlFor="category" className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">Category</label>
                    <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-500 border border-black-900 focus:ring-black-500 rounded-lg"placeholder=" clothing, food ,furniture"/>
                </div>     
                <div>
                    <label htmlFor="amount" className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-500 border border-black-900 focus:ring-black-500 rounded-lg"placeholder=" 100/=, 1000/=, 50/="/>
                </div>
                <div>
                    <label htmlFor="date" className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">Date</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-gray-500 border border-black-900 focus:ring-black-500 rounded-lg"/>
                </div>
                <button type="submit" className="text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800 border border-black-900 mt-6">Add Expense</button>
            </form>
            </div>

            <div className="mt-6">
               <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
               <ExpenseList expenses={expenses} searchTerm={searchTerm} />
            </div>
           
        </div>
        

       

    )
}

export default Form;