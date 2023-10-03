import express from "express";
import "dotenv/config";

import { router } from "./features/api/routes.js";
import { Browser } from "./features/chatpgt/index.js";

let browserInstance: Browser;
const app = express();

app.use(router);

app.get("/", async (req, res) => {
  await browserInstance.sendMessage("Hello there")
  res.send("message sent")
})

app.listen(3000, async () => {
  browserInstance = new Browser();
  browserInstance.setup()
  console.log("Server running on PORT: 3000");
});
