const express = require('express');
const ctrl = require('./controllers.js');
const router = express.Router();
router.get('/', ctrl.getItems)
router.post('/', ctrl.createItem);
router.post('/uploadbase', ((req, res, next) => { 
    const newImg = new Image({
        imageName: req.body.imageName,
        imageData: req.body.imageData
    });

    newImg.save().then((result) => {
        res.status(200).json({
            success: true,
            document: result
        });
    }).catch((err) => next(err));
}))
module.exports = router