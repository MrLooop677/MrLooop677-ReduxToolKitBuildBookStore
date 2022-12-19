import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../store/bookSlice";

const BooksList = ({getBook}) => {
  const dispatch = useDispatch();
  const { isLoding, books } = useSelector((state) => state.Books);
  const { islogIn } = useSelector((state) => state.auth);



  const drawData = books.length
    ? books.map((book) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={book.id}
        >
          <div>{book.title}</div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary"onClick={()=>getBook(book.id)}>
              Read
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={!islogIn}
              onClick={() => {
                dispatch(deleteBook(book.id))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log("originalPromiseResult", originalPromiseResult);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                  });
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))
    : "not books available";
  return (
    <div>
      <h2>Books List</h2>
      {isLoding ? "Loading..." : <ul className="list-group">{drawData}</ul>}
    </div>
  );
};

export default BooksList;
