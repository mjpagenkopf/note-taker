const express = require('express');
const app = express();
const fs = require('fs');

const notes = require('../db/notes');
//EXPRESS IS CONNECTING API Routes to getNotes, saveNotes, deleteNotes from public/assets/js/index.js

module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => res.json(notes)); 

  app.get('/api/notes', (req, res) => {
    res.status(200).json({success: true, data: notes})
  })
  



  app.post('/api/notes', (req, res) => {

  notes.push(req.body);

  console.log(notes)
}





//ORIGINAL VERSION BELOW

// module.exports = (app) => {
//   //API ROUTES
  
//   //from public/assets/js/index.js --> the getNotes function
//     app.get('/api/notes', (req, res) => {
//       fs.readFile('./db/db.json', 'utf8', (err, data) => {
//         if(err) throw err;
//         res.json(JSON.parse(data));
//         console.log(data)
//     });
//   });

//   //from public/assets/js/index.js --> the saveNote function
//   app.post('/api/notes', (req, res) => {
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//       if(err) throw err;
//       var oldNotes = JSON.parse(data);
//       // var newNotes = [req.body, ...oldNotes]
//     fs.writeFile('./db/db.json', JSON.stringify(newNotes, null, 2), (err, data) => {
//       if(err) throw err;
//       res.json(data);
//       console.log(oldNotes);
//       })
//       // const oldNotes = JSON.parse(data);
//       // const newNotes = [req.body, ... oldNotes]
//     });
//   });

//   //from public/assets/js/index.js --> the deleteNote function
//   app.delete('/api/notes/:id', (req, res) => {
//   const delNote = JSON.parse(req.params.id);
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//   if (err) throw err;
//   var oldNotes = JSON.parse(data);
// };