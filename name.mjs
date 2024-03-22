import { app } from './scripts.mjs';

// Define a simple route
function name(params) {
    app.get('/', function (_req, res) {
    }, res.send('Hello, World!'));
}
