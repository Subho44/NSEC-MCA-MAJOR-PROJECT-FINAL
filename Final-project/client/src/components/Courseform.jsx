import React from "react";

const CourseForm = ({ formData, handleChange, handleSubmit, btnText,handelFile }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="instructor"
        placeholder="Instructor Name"
        value={formData.instructor}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={formData.duration}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        rows="4"
      ></textarea>
      <input 
       type="file"
       multiple
       onChange={handelFile}
       className="w-full border p-3 rounded"
      />

      <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">
        {btnText}
      </button>
    </form>
  );
};

export default CourseForm;