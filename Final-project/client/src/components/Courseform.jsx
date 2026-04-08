import React from 'react'

const Courseform = ({formData,handelChange,handelSubmit,btnText}) => {

  return <>
  <form onSubmit={handelSubmit}>
    <input 
    type='text'
    name='title'
    placeholder='course title'
    value={formData.title}
    onChange={handelChange}
    />
     <input 
    type='text'
    name='instructor'
    placeholder='course instructor'
    value={formData.instructor}
    onChange={handelChange}
    />
     <input 
    type='number'
    name='price'
    placeholder='course price'
    value={formData.price}
    onChange={handelChange}
    />
     <input 
    type='text'
    name='duration'
    placeholder='course duration'
    value={formData.duration}
    onChange={handelChange}
    />
     <input 
    type='text'
    name='category'
    placeholder='course category'
    value={formData.category}
    onChange={handelChange}
    />
     <textarea
    type='text'
    name='description'
    placeholder='course description'
    value={formData.description}
    onChange={handelChange}
    rows="4"
    ></textarea>
  <button className='bg-blue-600 text-white'>
    {btnText}
  </button>
    


  </form>
  
  </>
}

export default Courseform