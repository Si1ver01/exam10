import React from "react";
import { FaTrash } from "react-icons/all";

const CommentItem = ({ author, text, removeHandler }) => {
  return (
    <li className="list-group-item d-flex flex-column mb-1">
      <div className="d-flex justify-content-between border-bottom pb-1">
        <b>Author : {author}</b>
      </div>
      <p className="my-2">{text}</p>
      <div className="d-flex justify-content-end mt-2">
        <button className="btn-outline-danger btn" onClick={removeHandler}>
          Remove comment <FaTrash className="ml-1" />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
