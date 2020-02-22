import React, { useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { requestGetNews } from "../../store/actions/actionsNews";
import Preloader from "../../components/Preloader/Preloader";

const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);
  const loadingNews = useSelector(state => state.news.loading);

  useEffect(() => {
    dispatch(requestGetNews());
  }, [dispatch]);

  if (loadingNews) {
    return (
      <div className="Loader">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mt-2">News Feed</h2>
      {news.length && <NewsList list={news} />}
    </div>
  );
};

export default NewsFeed;
