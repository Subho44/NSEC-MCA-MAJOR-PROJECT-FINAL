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
 const [images,setImages] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFilechange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const  data = new FormData();
      data.append("title",formData.title);
      data.append("instructor",formData.instructor);
      data.append("price",formData.price);
      data.append("duration",formData.duration);
      data.append("category",formData.category);
      data.append("description",formData.description);

      for(let i=0; i< images.length; i++){
        data.append("images",images[i]);
      }

      await API.post("/",data, {
        headers:{
          "Content-Type":"multipart/form-data",
        },
      });
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
        handelFile={handleFilechange}
        btnText="Add Course"
      />
    </div>
  );
};

export default AddCourse;