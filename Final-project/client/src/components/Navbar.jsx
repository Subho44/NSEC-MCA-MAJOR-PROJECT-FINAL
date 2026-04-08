import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return <>
  <div className='bg-white shadow-md'>
    <div className='flex max-w-6xl mx-auto justify-between items-center px-4 py-4'>
        <h1 className='text-2xl font-bold text-blue-600'>E-Learning</h1>
        <ul className='flex gap-6 text-zinc-900 font-medium'>
            <li className='hover:text-blue-600 cursor-pointer'>
                <Link to="/home">Home</Link>
            </li>
              <li className='hover:text-blue-600 cursor-pointer'>
                <Link to="/about">About</Link>
            </li>
             <li className='hover:text-blue-600 cursor-pointer'>
                <Link to="/contact">Contact</Link>
            </li>
             <li className='hover:text-blue-600 cursor-pointer'>
                <Link to="/f">Feauture</Link>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
                <Link to="/add-course">Add Course</Link>
            </li>
        </ul>
    </div>
  </div>
  
  
  
  </>
}

export default Navbar