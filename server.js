// DEPENDENCIES
const express = require('express');
const fs = require('fs');
// const path = require('path');
// const routes = require('./routes');
// const notes = require('./db/notes');
// const apiRoutes = require('./routes/apiRoutes');
// EXPRESS CONFIGURATION
const app = express();
// var data = fs.readFileSync('./db/db.json');


// Sets an initial port. 
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")) //tells express to serve any "static" assets from the public folder
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
