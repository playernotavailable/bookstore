import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 import Rating from "./Rating";
import Price from "./price";

const Book = ({ book }) => {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
        setLoading(false);
      }, 300);
    };
  }, [book.url]);

  return (
    <div className="book">
      {loading ? (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default Book;