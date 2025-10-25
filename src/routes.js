const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdHandler, deletedNoteByIdHandler } = require('./handler.js');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return { message: 'Notes APP API' };
        },
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deletedNoteByIdHandler,
    }
]

module.exports = routes;