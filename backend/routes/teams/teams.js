var express = require('express');
var router = express.Router();
var db = require('../../middleware/db.js')
const collection = 'teams'

/* GET teams. */
router.get('/', function(req, res, next) {
    teamName = 'Canucks'
    res.setHeader('Content-Type', 'application/json');
    db.findById(collection, teamName).then(data => {
        res.json(data);
    })
});

router.get('/:name', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    db.findById(collection, req.params['name']).then(data => {
        res.json(data);
    })
});

router.get('/stats', function(req, res, next) {
    const data = {
        "goals": "30",
        "assists": "53",
        "points": "83"
    };

    res.setHeader('Content-Type', 'application/json');
    res.json(data);
});


module.exports = router;
