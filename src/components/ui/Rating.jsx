import React from "react";
import Book from "./Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ratings}) => {
  return (
    <div className="book_ratings">
                {
                    new Array(Math.floor(Book.rating)).fill(0).map((_, index) => (
                        <FontAwesomeIcon icon="star" key={index} className="book__rating--icon"/>
                    ))
                } 
                {
                    !Number.isInteger(Book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />
                }
            </div>
  );
}

export default Rating;