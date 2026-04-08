import React,{useState,useEffect} from 'react'
import API from '../api/courseApi';
import Courselist from '../components/Courselist';

const Home = () => {
  const [courses,setCourses] = useState([]);
  const [search,setSearch] = useState("");

  const getcourses = async()=> {
   const res = await API.get("/");
   setCourses(res.data);

  }
  const hd = async(id)=> {
   await API.delete(`/${id}`);
   getcourses();

  }
    const searchcourse = async()=> {
      
      if(search === "") {
        getcourses();
      } else {
        const res = await API.get(`/search/${search}`);
        setSearch(res.data);
      }
  };
  useEffect(()=>{
    getcourses();
  },[]);


  return <>
   <div>
    <input 
    type='text'
    placeholder='search ....'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    <button onClick={searchcourse}>
      Search
    </button>
   </div>
   <Courselist courses={courses} onDelete={hd} />
 
  
  </>
}

export default Home