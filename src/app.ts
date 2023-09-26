import express from 'express';
import "dotenv/config"

import { router } from './features/api/routes.js';

const app = express()

app.use(router);

app.listen(3000, () => {
    console.log("Listening on port: 3000")
})