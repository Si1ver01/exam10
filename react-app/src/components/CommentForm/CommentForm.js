import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestAddComment } from "../../store/actions/actionsComment";

const CommentForm = ({ id }) => {
  const [data, setData] = useState({ author: "", text: "" });
  const dispatch = useDispatch();

  const inputHandler = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(requestAddComment({ ...data, id }));
    setData({ ...data, text: "" });
  };

  return (
    <form onSubmit={submitHandler} className="px-2 mb-2">
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            name="author"
            value={data.author}
            onChange={inputHandler}
          />
        </div>
        <div className="col-7">
          <input
            type="text"
            className="form-control"
            placeholder="Message"
            name="text"
            value={data.text}
            onChange={inputHandler}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-outline-primary btn-block">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
