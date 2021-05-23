const express = require('express');
const app = express();
const fs = require('fs');

//EXPRESS IS CONNECTING API Routes to getNotes, saveNotes, deleteNotes from public/assets/js/index.js
// const { v4 : uuidv4 } = require('uuid');

module.exports = (app) => {
  //API ROUTES
  
  //from public/assets/js/index.js --> the getNotes function
    app.get('/api/notes', (req, res) => {
      fs.readFile('./db/db.json', 'utf8', (err, note) => {
        if(err) throw err;
        res.json(JSON.parse(note));
        console.log(note)
    });
  });

  //from public/assets/js/index.js --> the saveNote function
  app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, note) => {
      if(err) throw err;
      const saveNote = JSON.parse(note);
      // const newId = uuidv4()
      const newNotes = [req.body, ...saveNote]
      newNotes.forEach((item, i) => {
        item.id = i + 1;
      });
      console.log(newNotes);
     
    fs.writeFile('./db/db.json', JSON.stringify(newNotes, null, 2), (err, note) => {
      if(err) throw err;
      res.json(note);
      });
    });
  });

  //from public/assets/js/index.js --> the deleteNote function
  app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, note) => {
        if (err) throw err;
        const deleteNote = JSON.parse(note);
        const { id } = req.params;
        const index = deleteNote.findIndex((note, index) => note.id == id)
        deleteNote.splice(index, 1);
        // return res.send();

    fs.writeFile('./db/db.json', JSON.stringify(deleteNote, null, 2), (err, note) => {
      if(err) throw err;
      res.json(note);
      });
    });
  });
};

































// module.exports = (app) => {
  
//     app.get('/api/notes', (req, res) => {
//       notes()
//     }

//     app.get('/api/notes', (req, res) => {
//       res.status(200).json({success: true, data: notes})
//     });
    
//     app.post('/api/notes', (req, res) => {
//       res.send('POST')
//     var newNote = notes.push(req.body);

//     console.log(newNote)
//   });

//     app.delete('/api/notes/:id', (req, res) => {


//     })




// };





//ORIGINAL VERSION BELOW

