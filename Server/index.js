// server/index.js
const axios = require('axios');
const { response } = require('express');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
  
   try {
    const response = cocktailDb()  
  } catch (e) {
    console.log(e)
  }
   console.log("test")

    res.json({ message: response.json });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

async function cocktailDb(){
  try {
    const response = await axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
    return response
  } catch (e) {
    console.log(e)
  }
 }