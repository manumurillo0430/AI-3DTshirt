const express = require("express");
const cors = require("cors");
const dalleRoute = require("./Routes/dalleRoute");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://artai-3dtshirt.com'],
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  methods: ['GET', 'POST'],
}

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use("/dalle_image", dalleRoute);

app.listen(8080, () => console.log("Server has started on port 8080"));

