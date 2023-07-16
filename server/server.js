const express = require("express");
const cors = require("cors");
const dalleRoute = require("./Routes/dalleRoute");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limig: "50mb" }));
app.use("/dalle_image", dalleRoute);

app.listen(8080, () => console.log("Server has started on port 8080"));
