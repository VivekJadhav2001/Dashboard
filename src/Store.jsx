import { createContext, useEffect, useState } from "react";


const Context = createContext();


function Store({children}) {

    const [userData, setData] = useState([]);
    const [storeUserData, setStoreUserData] = useState([]);

    async function fetchData() {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        setData(data.users);
        setStoreUserData(data.users);

    }

    // console.log(userData[0].age, "age of user");

    //Delete User
    function deleteUser(id) {
        const filteredUsers = userData.filter((user) => user.id !== id);
        setData(filteredUsers);
        setStoreUserData(filteredUsers);
        
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <Context.Provider value={{userData, setData, storeUserData, setStoreUserData,deleteUser}}>
            {children}
        </Context.Provider>
    )
}    

export {Context, Store};
