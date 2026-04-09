import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border">
      <h2 className="text-xl font-bold text-blue-600 mb-2">{course.title}</h2>
      <p className="mb-1"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
      <p className="mb-1"><span className="font-semibold">Price:</span> ₹{course.price}</p>
      <p className="mb-1"><span className="font-semibold">Duration:</span> {course.duration}</p>
      <p className="mb-1"><span className="font-semibold">Category:</span> {course.category}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        <Link
          to={`/course/${course._id}`}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          View
        </Link>

        <Link
          to={`/edit-course/${course._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(course._id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CourseCard;