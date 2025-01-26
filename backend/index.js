import express from "express";
import https from "https";
import fs, { link } from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("server is readt now");
});

app.get("/city", (req, res) => {
  const city = [
    {
      id: 1,
      title: "pune",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Nagapur",
    },
    {
      id: 4,
      title: "charapati sabaji nagar",
    },
    {
      id: 5,
      title: "dharashiva",
    },
  ];
  res.send(city);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
