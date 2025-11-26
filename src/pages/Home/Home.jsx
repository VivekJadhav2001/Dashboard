import React from 'react'
import Search from '../../components/Home/Search'
import AddItem from '../../components/Home/AddItem'
import Table from '../../components/Home/Table'

function Home() {
  return (
    <>
    <div className='w-screen flex gap-4 justify-center items-center mt-7'>
        <Search/>
        <AddItem/>
    </div>
    <Table/>
    </>
  )
}

export default Home