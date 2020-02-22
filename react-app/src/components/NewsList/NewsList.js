import React from "react";
import NewsItem from "./NewsItem/NewsItem";
import { useDispatch } from "react-redux";
import { requestDeleteNews } from "../../store/actions/actionsNews";

const NewsList = ({ list }) => {
  const dispatch = useDispatch();

  const deleteHandler = id => {
    dispatch(requestDeleteNews(id));
  };

  return (
    <div className="row mt-2">
      <div className="col-8 offset-2">
        {list.map(item => (
          <NewsItem
            title={item.title}
            id={item.id}
            key={item.id}
            date={item.date}
            image={item.image}
            handler={() => deleteHandler(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
