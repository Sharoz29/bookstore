import "./bookCard.css";
import { ReactComponent as FavouriteIcon } from "../../assets/heart-svgrepo-com.svg";
import { ReactComponent as InfoIcon } from "../../assets/info-circle-svgrepo-com.svg";
import BookModal from "../bookmodal/bookmodal";

import { useState } from "react";

const BookCard = ({ book }) => {
  const bookImage = book["formats"]["image/jpeg"];

  // console.log(authorNameArr);
  const [showInfo, setShowInfo] = useState(false);

  const openModal = () => {
    setShowInfo(true);
  };
  const closeModal = () => {
    setShowInfo(false);
  };

  return (
    <div className="book-data-container" key={book.id}>
      <img className="book-image" alt="" src={bookImage} />
      <div className="icons-container">
        <FavouriteIcon className="icon fav-icon" />
        <InfoIcon className="icon info-icon" onClick={openModal} />
        {showInfo && <BookModal bookInfo={[book]} closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default BookCard;
