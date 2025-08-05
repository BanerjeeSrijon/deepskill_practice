// src/CourseDetails.js
import React from "react";

function CourseDetails({ courses }) {
  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id}>
            <h2>{course.cname}</h2>
            <h4>{course.date}</h4>
          </div>
        ))
      ) : (
        <p>No Courses Available</p>
      )}
    </div>
  );
}

export default CourseDetails;
