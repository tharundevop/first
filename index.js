const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const path = require("path");
const { open } = require("sqlite");

const dbPath = path.join(__dirname, "goodreads.db");
let db = null;
const intializeAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Hello Tharun");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

intializeAndServer();
