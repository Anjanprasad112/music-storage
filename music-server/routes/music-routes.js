const express = require('express');
const router = express.Router();
const musiccontroller = require('../controllers/music-contollers');
// const Book = require('../model/Book');

router.get('https://music-server-kappa.vercel.app/',musiccontroller.getAllMusic);
router.post('https://music-server-kappa.vercel.app/',musiccontroller.addMusic);
router.get('https://music-server-kappa.vercel.app/:id',musiccontroller.getById);
router.put('https://music-server-kappa.vercel.app/:id',musiccontroller.updateMusic);
router.delete('https://music-server-kappa.vercel.app/:id',musiccontroller.deleteMusic);

module.exports = router;