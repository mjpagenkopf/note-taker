

const Db = require('./db/db.json');

const db = new Db();

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get('')
}