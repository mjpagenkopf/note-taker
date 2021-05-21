const fs = require('fs')
const util = require('util');


const readFileAsync = util.promisify(fs.readFile);


function notes() {
    return readFileAsync('db/db.json', 'utf8');
}



notes();


// async function notes() {
//     try {
//         const notes = await readFileAsync('./db/db.json', 'utf8', (res =>);
//             console.log(notes)
//         } catch (err) {
//             res.
//             console.log('Error', err);
//         }
//     }


// notes();


// const { readFile, writeFile } = require('fs') = old;

// readFile('./db/db.json', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     const notes = result;
//     console.log(notes);
//     // writeFile('./db/db.json', 'utf8', (err, result) => {
//     //     if (err) {
//     //         console.log(err)
//     //     }
//     // })
// });

// writeFile('./routes/apiRoutes.js', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     const newNote = result;
//     console.log(newNote);
// });

// module.exports = { notes, newNote }
















// const readFileAsync = util.promisify(fs.readFile);

// read() {
//     return readFileAsync('/db.json', 'utf8');
// }

// module.exports = notes





