import express from "express";
import { PORT } from "./app/config/config.js";

// Router imports
import homeRoute from "./app/routes/home.js";

// app
const app = express();

// Routes
app.use("/", homeRoute);

// configs
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));