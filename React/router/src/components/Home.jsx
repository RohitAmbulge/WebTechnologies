import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <nav>
            <Link to="/home" >Home</Link>
            <Link to="/home/about">About</Link>
            <Link to="/home/contact">Contact</Link>
        </nav>

        <Outlet></Outlet>
    </>
  )
}

export default Home
