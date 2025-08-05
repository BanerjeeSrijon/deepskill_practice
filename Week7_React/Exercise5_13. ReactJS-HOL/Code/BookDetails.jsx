// src/BookDetails.js
import React from "react";

function BookDetails({ books, showBooks }) {
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="section">
      <h1>Book Details</h1>
      {showBooks ? bookdet : <p>Books are hidden</p>}
    </div>
  );
}

export default BookDetails;
