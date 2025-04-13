import React from "react";


function ExpenseList({expenses,searchTerm, setExpenses}){
    const filteredExpenses = expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="col-span-2">
        <h1 className="ml-2 mb-2 text-xl font-bold underline">Your Expenses</h1>
        <table className="border border-black-900 rounded-lg bg-gray-500 p-6 rounded-lg mb-10">
            <thead>
                <tr className="gap-4 border-b border-gray-300 rounded-lg">
                    <th className="px-14 py-2">Name</th>
                    <th className="px-14 py-2">Description</th>
                    <th className="px-14 py-2">Category</th>
                    <th className="px-14 py-2">Amount</th>
                    <th className="px-14 py-2">Date</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through the expenses array and display each expense */}
                {filteredExpenses.map((expense, index) => (
                    <tr key={index}>
                        <td className="px-14 py-2">{expense.name}</td>
                        <td className="px-14 py-2">{expense.description}</td>
                        <td className="px-14 py-2">{expense.category}</td>
                        <td className="px-14 py-2">{expense.amount}</td>
                        <td className="px-14 py-2">{expense.date}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ExpenseList;