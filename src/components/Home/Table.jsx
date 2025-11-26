import React, {useContext} from 'react'
import { Context } from '../../Store'
import Actions from './Actions'
import moment from 'moment'

function Table() {

    const {userData, setData, storeUserData, setStoreUserData} = useContext(Context)
    
    
    
      function deleteUser(id){
        const dataAfterUserDelete = storeUserData.filter((user)=> user.id !== id)
        setData(dataAfterUserDelete)
        setStoreUserData(dataAfterUserDelete)
      }

    // console.log(userData, "userData in table component");

    function formatData(date){
        return moment(date).format('LL')
    }
    
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full flex justify-center items-center mt-10 px-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bithdate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {userData.map((user) => (
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" key={user.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                                {user.firstName} {user.lastName}
                            </th>
                            <td className="px-6 py-4">
                                {user.age}
                            </td>
                            <td className="px-6 py-4">
                                {formatData(user.birthDate)}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 flex gap-4">
                                <Actions id={user.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table