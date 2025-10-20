const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});