var express = require('express');
var router = express.Router();
var db = require('../../middleware/db.js')
const collection = 'players'
const fs = require('fs');

/* GET players. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    db.findAll(collection).then(data => {
        res.json(data);
    })
});

router.get('/:name', function(req, res, next) {
    // console.log(req.app.get('mongodb'))
    res.setHeader('Content-Type', 'application/json');
    db.findById(collection, req.params['name']).then(data => {
        res.json(data);
    })
});

// If we use form instead of query we can uses this URI /players/stats
// where form data players = playername
// Otherwise we need the following endpoint /players/:name/stats
router.get('/stats', function(req, res, next) {
    const data = {
        "goals": "30",
        "assists": "53",
        "points": "83"
    };

    res.setHeader('Content-Type', 'application/json');
    res.json(data);
});


router.post('/', function(req, res, next) {
    console.log(req)
    console.log(req.body)
    console.log(req.file)
    console.log(req.files)
    // fs.writeFileSync('testfile.jpg', req.imageUpload.data);
    res.setHeader('Content-Type', 'application/json');
    res.json('{good:job}');
});


module.exports = router;
