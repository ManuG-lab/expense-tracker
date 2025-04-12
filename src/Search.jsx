import React from "react";

function Search({searchTerm, setSearchTerm}){
    return(
        <div>
        <input
            type="text"
            placeholder="Search by name, category, or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 w-full border border-black-900 rounded-lg"
        />
        </div>
    )
}
export default Search;