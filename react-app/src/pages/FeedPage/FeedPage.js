import React, { useEffect } from "react";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestGetOneNews } from "../../store/actions/actionsNews";
import Preloader from "../../components/Preloader/Preloader";

const FeedPage = () => {
  const dispatch = useDispatch();
  const oneNews = useSelector(state => state.news.oneNews);
  const loadingNews = useSelector(state => state.news.loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestGetOneNews(id));
  }, [dispatch, id]);

  if (loadingNews || !oneNews) {
    return <Preloader />;
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-8 offset-2">
          <div className="card text-center">
            <div className="card-header">{oneNews.title}</div>
            <div className="card-body">
              <span className="text-right text-secondary">
                {new Date(oneNews.date).toLocaleString()}
              </span>
              <p className="card-text">{oneNews.text}</p>
            </div>
            <CommentForm id={id} />
            <div className="card-footer text-muted">
              <CommentList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
