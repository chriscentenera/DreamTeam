var express = require('express');
var router = express.Router();

/* GET players. */
router.get('/', function(req, res, next) {
    const data = {
        "name": "Elias Pettersson",
        "position": "Forward",
        "number": "40"
    };

    res.setHeader('Content-Type', 'application/json');
    res.json(data);
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
