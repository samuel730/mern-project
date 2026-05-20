import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let collection = await db.collection("records");

    let results = await collection.find({}).toArray();

    res.status(200).send(results);
  } catch (err) {
    res.status(500).send("Error fetching records");
  }
});

export default router;