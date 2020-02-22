const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const { connection } = require("../mySQL");
const upload = require("../multer");

const route = Router();

route.get("/", async (req, res) => {
  const data = await connection().query("SELECT id,title,image,date FROM news");
  res.status(200).json({ data: data[0] });
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await connection().query("SELECT * FROM news WHERE id=?", id);
  res.status(200).json({ data: data[0][0] });
});

route.post(
  "/",
  [
    upload.single("image"),
    check("title", "Поле заголовка не может быть пустым").isLength({ min: 1 }),
    check("text", "Текст новости не может быть пустым").isLength({ min: 1 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let filename = null;

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    if (req.file) {
      filename = req.file.filename;
    }

    const { title, text } = req.body;

    const data = await connection().query(
      "INSERT INTO news (title , text , image) VALUES(?,?,?)",
      [title, text, filename]
    );

    const { insertID } = data[0];

    res.status(200).json([{ id: insertID, title, text, image: filename }]);
  }
);

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await connection().query("DELETE FROM news WHERE id=?", id);
  res.status(200).json({ data: data[0] });
});

module.exports = route;
