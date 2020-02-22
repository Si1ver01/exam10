import React from "react";
import Hoc from "./components/Hoc/Hoc";
import Form from "./pages/Form/Form";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import FeedPage from "./pages/FeedPage/FeedPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Hoc>
      <Switch>
        <Route path="/news/:id" component={FeedPage} />
        <Route path="/form" component={Form} />
        <Route path="/" exact component={NewsFeed} />
      </Switch>
    </Hoc>
  );
}

export default App;
