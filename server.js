import fetch from "node-fetch";
import express from "express";
import xml from "xml";
import { Parser } from "json2csv";

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
  const downloaded_format = req.query.downloaded_format;
  const returned_format = req.query.returned_format;
  const text = req.query.text;

  try {
    const response = await fetch(
      `http://localhost:3001/format?format=${downloaded_format}&text=${text}`
    );

    const message = await response.text();

    if (returned_format === "json") {
      return res.status(200).json({ message });
    } else if (returned_format === "xml") {
      res.set("Content-Type", "application/xml");
      return res.status(200).send(xml(`${message}`));
    } else if (returned_format === "csv") {
      const json2csv = new Parser();
      return res.status(200).send(json2csv.parse({ message }));
    } else if (returned_format === "txt") {
      return res.status(200).send(message);
    } else {
      return res.status(400).send("Incorrect format");
    }
  } catch (error) {
    console.error(error);
  }
});
