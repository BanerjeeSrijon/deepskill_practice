// src/App.js
import React from "react";
import "./App.css";
import { books, courses, blogs } from "./data";
import BookDetails from "./BookDetails";
import CourseDetails from "./CourseDetails";
import BlogDetails from "./BlogDetails";

function App() {
  const showBooks = true; // Try changing this to false to test conditional rendering

  return (
    <div className="container">
      <CourseDetails courses={courses} />
      <BookDetails books={books} showBooks={showBooks} />
      <BlogDetails blogs={blogs} />
    </div>
  );
}

export default App;
