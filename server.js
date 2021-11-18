import fetch from "node-fetch";
import express from "express";

const app = express();
const port = 3002;
const host = "localhost";
app.use(express.json());

app.listen(port, host, (error) => {
  if (error) {
    console.log("There was an error while running the server.");
  } else {
    console.log(`Server started at port ${port}`);
  }
});

app.get("/convert", async (req, res) => {
  const format = req.query.format;
  const text = req.query.text;

  try {
    const response = await fetch(
      `http://localhost:3001/format?format=txt&text=${text}`
    );

    const message = await response.text();
  } catch (error) {
    console.error(error);
  }
});
