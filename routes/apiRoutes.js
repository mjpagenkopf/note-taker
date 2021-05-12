
const path = require('path');
const fs = require('fs');


module.exports = (app) => {
//html routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
//api routes
app.post('./public/assets/notes', (req, res) => {
  const notes = req.body;

  notes.push(newNote);

  res.json(newNote);
});

app.delete





};