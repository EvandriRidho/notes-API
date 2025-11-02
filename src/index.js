const Hapi = require('@hapi/hapi');
const NoteService = require('./services/inMemory/noteService');
const notes = require('./api/notes');

const init = async () => {
    const notesService = new NoteService();

    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
            payload: {
                parse: true,
                allow: ['application/json'],
            }
        },
    });

    await server.register({
        plugin: notes,
        options: {
            service: notesService,
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
