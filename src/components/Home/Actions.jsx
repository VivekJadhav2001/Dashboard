import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Context } from '../../Store';
import { useNavigate } from 'react-router-dom';
function Actions({id}) {

  const {deleteUser} = useContext(Context)
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center gap-3.5'>
        <MdDelete size={20} className='cursor-pointer text-red-500' onClick={()=>deleteUser(id)}/>
        <TbWorld 
        size={20}  
        className='cursor-pointer'
        onClick={()=>navigate(`profile/${id}`)}
        />
    </div>
  )
}

export default Actions