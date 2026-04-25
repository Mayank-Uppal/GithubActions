import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Note from "./model/notes.js";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const note = await Note.create({ text: req.body.text });
  res.json(note);
});

app.listen(3001, () => console.log("Backend running on port 5000 🚀"));