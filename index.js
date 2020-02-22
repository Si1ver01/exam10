const express = require("express");

const newsRoute = require("./routes/news.route");
const commentsRoute = require("./routes/comments.route");
const { connectDB } = require("./mySQL");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));
app.use("/news", newsRoute);
app.use("/comments", commentsRoute);

const start = async () => {
  await connectDB();

  console.log(`mySQL database connected successful`);

  app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
  });
};

start();
