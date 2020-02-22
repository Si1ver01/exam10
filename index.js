const express = require("express");

const { connectDB } = require("./mySQL");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));

const start = async () => {
    await connectDB();

    console.log(`mySQL database connected successful`);

    app.listen(PORT, () => {
        console.log(`Server start on port ${PORT}`);
    });
};

start();
