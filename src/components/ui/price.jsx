import React from "react";
import Book from "./Book";

const Price = ({ originalPrice, salePrice }) => {
  return (
    <div className="book__price">
            {Book.salePrice ? (
                <>
                <span className="book__price--normal">${Book.originalPrice.toFixed(2)}</span>
                {salePrice.toFixed(2)}
                </>
            ) : <>${originalPrice.toFixed(2)}</>
            }
            <span className="book__price--normal">${Book.originalPrice}</span>
            <span className="book__price--sale">${Book.salePrice}</span>
        </div>
    );
}

export default Price;