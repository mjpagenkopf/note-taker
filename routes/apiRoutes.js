const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const array = require('../db/notes')

//EXPRESS IS SIMPLY CONNECTING THE TWO 

module.exports = (app) => {

//api routes
app.get('/api/notes', (req, res) => {
 fs.readFile('../db/db.json', 'utf8', (err, data) => {
   if(err) throw err;
   res.json(JSON.parse(data));
 });
});


app.post('/api/notes', (req, res) => {
  fs.readFile('../db/db.json', 'utf8', (err, data) => {
    if(err) throw err;
    const oldNotes = JSON.parse(data);
    oldNotes.push(req.body);
    fs.writeFile('../db/db.json', JSON.stringify(oldNotes), (err, data) => {
      if(err) throw err;
      res.json(data);
    })

    // const oldNotes = JSON.parse(data);
    // const newNotes = [req.body, ... oldNotes]
  });
});


app.delete('/api/notes/:id', (req, res) => {
  
});



};