// const { Router } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
// const index = require('../public/assets/js/index.js');
// var notesArr = require('./db.json');
// console.log(array);
let newNote = {};
// var notesArr = [];

newNote('./db.json', (title, text) => {

    var notesArr;

    try {
    
    notesArr.push(JSON.parse(fs.readFileSync('./db.json')));
    console.log(notesArr);
    newNote = `{
        ${title},
        ${text},
    }`

    notesArr.push(newNote);

    fs.writeFileSync('./db.json', JSON.stringify(notesArr));
});
newNote();

// module.exports = {
// }
console.log(newNote);





// app.get(index, (req, res) => {
//     fs.readFile(index, 'utf8', (err, notes) => {
//         if (err) throw err;
//         if (notes) {
//             res.json(JSON.parse(notes));
//         } else {
//             res.json('{}');
//         }
//     });
// });
// // //creating note
// app.post(array, (req, res) => {
//    fs.appendFileSync(array, JSON.parse)

