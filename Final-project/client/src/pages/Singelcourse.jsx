import React, { useEffect, useState } from "react";
import API from "../api/courseApi";
import { useParams, Link } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const getSingleCourse = async () => {
    try {
      const res = await API.get(`/${id}`);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCourse();
  }, [id]);

  if (!course) {
    return <h2 className="text-center py-10">Loading...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">{course.title}</h2>
        <p className="mb-2"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
        <p className="mb-2"><span className="font-semibold">Price:</span> ₹{course.price}</p>
        <p className="mb-2"><span className="font-semibold">Duration:</span> {course.duration}</p>
        <p className="mb-2"><span className="font-semibold">Category:</span> {course.category}</p>
        <p className="mb-4"><span className="font-semibold">Description:</span> {course.description}</p>

        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
          Back
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;