import React, { useEffect, useState } from "react";
import API from "../api/courseApi";
import CourseList from "../components/Courselist";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  const getCourses = async () => {
    try {
      const res = await API.get("/");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      if (search.trim() === "") {
        getCourses();
      } else {
        const res = await API.get(`/search/${search}`);
        setCourses(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-blue-600 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Course CRUD Project</h1>
        <p className="text-sm">Add, View, Edit, Delete and Search Courses</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Search course by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 rounded"
        >
          Search
        </button>
      </div>

      <CourseList courses={courses} onDelete={handleDelete} />
    </div>
  );
};

export default Home;