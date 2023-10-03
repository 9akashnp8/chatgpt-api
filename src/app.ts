import express from "express";
import "dotenv/config";

import { router } from "./features/api/routes.js";
import { Browser } from "./features/chatpgt/index.js";

export let browserInstance: Browser;
const app = express();

app.use(router);

app.listen(3000, async () => {
  browserInstance = new Browser();
  browserInstance.setup()
  console.log("Server running on PORT: 3000");
});
