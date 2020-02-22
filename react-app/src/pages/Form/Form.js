import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestAddNews } from "../../store/actions/actionsNews";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    text: "",
    image: null
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const inputHandler = e => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const inputFileHandler = e => {
    const { id, files } = e.target;
    setData({ ...data, [id]: files[0] });
  };

  const formHandler = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach(elem => formData.append(elem, data[elem]));
    await dispatch(requestAddNews(formData));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3 border rounded">
          <h2 className="text-center mt-2">Create new news</h2>
          <form onSubmit={formHandler}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title post"
                value={data.title}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Text:</label>
              <textarea
                className="form-control"
                id="text"
                rows="5"
                value={data.text}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Download file:</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                onChange={inputFileHandler}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-outline-primary btn-block mb-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
