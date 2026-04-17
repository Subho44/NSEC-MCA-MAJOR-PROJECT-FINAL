import React, { useState } from "react";
import API from "../api/courseApi";
import CourseForm from "../components/Courseform";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";

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

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection with preview
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.instructor || !formData.price) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );

      images.forEach((img) => data.append("images", img));

      await API.post("/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Course added successfully!");

      // Redirect after success
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add course!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-10 px-4">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 font-medium"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-6 shadow-lg text-center">
          <div className="flex justify-center mb-3">
            <FaBookOpen className="text-4xl" />
          </div>
          <h2 className="text-3xl font-bold">Add New Course</h2>
          <p className="text-sm opacity-90 mt-2">
            Create and publish a new course for your students.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <CourseForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handelFile={handleFileChange}
            btnText={loading ? "Adding..." : "Add Course"}
          />

          {/* Image Preview Section */}
          {previewImages.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Image Preview
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {previewImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="preview"
                    className="w-full h-32 object-cover rounded-lg border shadow"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center mt-6">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCourse;