import express from 'express';
const router = express.Router();

let places = [
    {id: 1, title: "Place 1"},
    {id: 2, title: "Place 2"},
    {id: 3, title: "Place 3"}
]

router.get('/', (req, res) => {
    const limit = req.query.limit;

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(places.slice(0, limit))
    }

    return res.status(200).json(places);
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const place = places.find(place => place.id === id);

    if (!place) {
        return res.status(404).json({message: `A post with id ${id} does not exist`});
    }

    return res.status(200).json(place);
})

export default router;