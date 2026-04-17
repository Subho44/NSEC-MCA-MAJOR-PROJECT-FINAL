import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, onDelete }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {course.images?.length > 0 && (
          <img
            src={`http://localhost:5500/uploads/${course.images[activeImage]}`}
            alt="course"
            className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
          />
        )}

        {/* Price Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow">
          ₹{course.price}
        </span>
      </div>

      {/* Thumbnail Images (Amazon style) */}
      {course.images?.length > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto">
          {course.images.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:5500/uploads/${img}`}
              onMouseEnter={() => setActiveImage(index)}
              className={`w-14 h-14 object-cover rounded-md border cursor-pointer transition 
                ${activeImage === index ? "border-blue-600" : "border-gray-300"}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500 mb-1">
          👨‍🏫 {course.instructor}
        </p>

        <p className="text-sm text-gray-500 mb-2">
          ⏱ {course.duration}
        </p>

        <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full mb-3">
          {course.category}
        </span>

        {/* Buttons */}
        <div className="flex gap-2 flex-wrap">
          <Link
            to={`/course/${course._id}`}
            className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700"
          >
            View
          </Link>

          <Link
            to={`/edit-course/${course._id}`}
            className="flex-1 text-center bg-yellow-500 text-white py-2 rounded-lg text-sm hover:bg-yellow-600"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(course._id)}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;