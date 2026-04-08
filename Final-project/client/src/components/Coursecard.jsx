import React from 'react'
import { Link } from 'react-router-dom'
const Coursecard = ({course,onDelete}) => {

  return <>
  <div className='bg-white shadow rounded-lg p-4 border'>
    <h2>{course.title}</h2>
    <p>{course.instructor}</p>
   <p>₹{course.price}</p>
   <p>{course.duration}</p>
   <p>{course.category}</p>

   <div className='flex gap-2'>
    <Link to={`/course/${course._id}`}>View</Link>
    <Link to={`/edit-course/${course._id}`}>Edit</Link>
    <button onClick={()=>onDelete(course._id)}>
        Delete
    </button>
   </div>

  </div>
  
  
  </>
}

export default Coursecard