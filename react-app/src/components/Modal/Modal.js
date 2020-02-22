import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ error, handler }) => {
  if (error) {
    console.log(error);
    return (
      <div className="Modal">
        <div className="row mt-5">
          <div className="col-6 offset-3 shadow border-success rounded p-2 bg-white mt-5 text-center">
            <h5 className="text-danger">Произошла ошибка</h5>
            <ul className="list-unstyled">
              {error.map(elem => (
                <li className="text-danger">{elem.msg}</li>
              ))}
            </ul>
            <button className='btn btn-outline-danger' onClick={handler}>Go to form</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Modal">
      <div className="row mt-5">
        <div className="col-6 offset-3 shadow border-success rounded p-2 bg-white mt-5 text-center">
          <h5 className="text-success mt-3">Success</h5>
          <Link to="/" className="btn btn-outline-success mt-3">
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
