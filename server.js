// We instantiate express.
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;

import places from './routes/places.js';

// We start listening on our chosen port.
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

// Routes.
app.use('/api/places', places);

