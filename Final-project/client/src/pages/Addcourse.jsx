import React, { useState } from "react";
import API from "../api/courseApi";
import CourseForm from "../components/Courseform";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    price: "",
    duration: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Course</h2>
      <CourseForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        btnText="Add Course"
      />
    </div>
  );
};

export default AddCourse;