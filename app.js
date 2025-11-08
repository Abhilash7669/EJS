import express from "express";
import expressLayout from "express-ejs-layouts"
import path from "path";
import { fileURLToPath } from "url";
import homeRouter from "./routes/home.routes.js";


// express instance
const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set EJS as the view engine and serve
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serve static public folder for views corresponding css
app.use(express.static("public"));
app.use(expressLayout);
app.set("layout", "layout");

app.use(express.urlencoded({ extended: true }));


// routes
app.use("/base", homeRouter);


app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
