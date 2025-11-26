import React, { useContext, useState } from 'react'
import { Context } from '../../Store';

function Search() {
    const {userData,setData,storeUserData, setStoreUserData} = useContext(Context);

    function searchUser(text) {
        const filteredData = storeUserData.filter((user) => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.toLowerCase().includes(text.toLowerCase().toLowerCase());
        });

        setData(filteredData);


    }

  return (
    <div>
        <input 
        onChange={(e)=>searchUser(e.target.value)}
        type="text" 
        id="voice-search" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90vw] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search user..." 
        required 
        />
        
    </div>
  )
}

export default Search