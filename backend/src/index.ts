import "dotenv/config"
import express from "express";

const app = express();

app.get("/", (_, res) => {
  return res.status(200).json({ message: "OK" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at ", process.env.PORT);
});
