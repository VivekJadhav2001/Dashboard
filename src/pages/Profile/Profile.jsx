import React, { useContext } from 'react'
import ProfileCard from '../../components/Profile/ProfileCard'
import { Context } from '../../Store'
import { useParams } from 'react-router-dom'

function Profile() {
    const {userData} = useContext(Context)
    const {id} = useParams()

    const user = userData.find((item)=>item.id == Number(id))

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      {user ? <ProfileCard user={user} /> : <h1 className='text-5xl font-bold'>User Not Found</h1>}
    </div>
  )
}

export default Profile