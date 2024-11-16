// We instantiate express.
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;

// Route imports.
import places from './routes/places.js';

// Middleware imports.
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

// We start listening on our chosen port.
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

// Routes.
app.use('/api/places', places);

// Middleware.
app.use(express.json()); // Allows us to post raw JSON to this server.
app.use(express.urlencoded({ extended: true })); // Allows us to send form-urlencoded to this server.
app.use(errorHandler); // Handles errors in our routes.
app.use(notFound); // Catch all error handler.



