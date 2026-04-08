import React from 'react'
import Coursecard from './Coursecard'

const Courselist = ({courses,onDelete}) => {

  return <>
  <div>
    {courses.map(x=>(
        <Coursecard key={x._id} course={x} onDelete={onDelete}/>
    ))}
  </div>
  
  </>
}

export default Courselist