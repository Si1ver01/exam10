const { Router } = require("express");
const { connection } = require("../mySQL");

const route = Router();

route.get("/", async (req, res) => {
  const { news_id } = req.query;
  let data = null;

  if (news_id) {
    data = await connection().query(
      "SELECT * FROM comments WHERE id_news=?",
      news_id
    );
    return res.status(200).json({ data: data[0] });
  }

  data = await connection().query("SELECT * FROM comments");
  res.status(200).json({ data: data[0] });
});

route.post("/", async (req, res) => {
  let { id, author, text } = req.body;

  if (!author.length) {
    author = "Anonymous";
  }

  if (id && text) {
    const data = await connection().query(
      "INSERT INTO comments (id_news,author,text) VALUES (?, ? , ?)",
      [id, author, text]
    );
    const { insertId } = data[0];
    return res.status(200).json([{ id: insertId, author, text, id_news: id }]);
  }

  res.send(400).json({ error: "Vot i error" });
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = connection().query("DELETE FROM comments WHERE id=?", id);
  res.status(200).json({ data: data[0] });
});

module.exports = route;
