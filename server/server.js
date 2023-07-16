const express = require("express");
const cors = require("cors");
const dalleRoute = require("./Routes/dalleRoute");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:8080"],
    credentials: true,
  })
);
app.use(express.json({ limig: "50mb" }));
app.use("/dalle_image", dalleRoute);

app.listen(8080, () => console.log("Server has started on port 8080"));
