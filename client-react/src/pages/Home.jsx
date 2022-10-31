import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/Navbar'
import ShowTable from '../components/ShowTable'
import { AppProvider } from '../context/appContext'


export default function Home() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
      <AppProvider />
      <NavBar />
      <Card />
      <ShowTable />
      </div>
    </div>
  )
}
