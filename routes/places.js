import express from 'express';
import {getPlace, getPlaces} from '../controllers/placeController.js';
const router = express.Router();

router.get('/', getPlaces)

router.get('/:id', getPlace)

export default router;