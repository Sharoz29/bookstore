import "./bookmodal.css";
import { useState } from "react";

const BookModal = ({ bookInfo, closeModal }) => {
  const [book] = bookInfo;
  const bookImage = book["formats"]["image/jpeg"];
  const [authorNameArr] = book["authors"];
  console.log(book);

  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <span className="close-modal" onClick={closeModal}>
          X
        </span>
        <div className="modal-content">
          <h1 className="book-title">{book.title}</h1>
          <img className="modal-book-image" src={bookImage} alt="" />
          <div className="book-author">
            <span className="book-author-content">
              <b> Written By:</b> {authorNameArr.name}
            </span>
          </div>
          <div className="book-genre">
            <span className="genre-content">
              {" "}
              <b>Genre:</b>
            </span>
            <ul className="genre-list">
              {book.subjects.map((subject) => (
                <li className="list-item">{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookModal;
