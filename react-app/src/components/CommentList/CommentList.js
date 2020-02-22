import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem/CommentItem";
import { useDispatch, useSelector } from "react-redux";
import {
  requestDeleteComment,
  requestGetComment
} from "../../store/actions/actionsComment";
import Preloader from "../Preloader/Preloader";

const CommentList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);
  const loadingComments = useSelector(state => state.comments.loading);

  useEffect(() => {
    dispatch(requestGetComment(id));
  }, [dispatch, id]);

  const deleteHandler = id => {
    dispatch(requestDeleteComment(id));
  };

  if (loadingComments || !comments.length) {
    return (
      <div className="d-flex justify-content-center">
        <Preloader />
      </div>
    );
  }

  return (
    <ul className="list-group">
      {comments.map(comment => (
        <CommentItem
          author={comment.author}
          text={comment.text}
          key={comment.id}
          removeHandler={() => deleteHandler(comment.id)}
        />
      ))}
    </ul>
  );
};

export default CommentList;
