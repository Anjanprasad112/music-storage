const express = require('express');
const router = express.Router();
const musiccontroller = require('../controllers/music-contollers');
// const Book = require('../model/Book');

router.get('/',musiccontroller.getAllMusic);
router.post('/',musiccontroller.addMusic);
router.get('/:id',musiccontroller.getById);
router.put('/:id',musiccontroller.updateMusic);
router.delete('/:id',musiccontroller.deleteMusic);

module.exports = router;