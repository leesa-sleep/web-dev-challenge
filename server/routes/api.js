const router = require('express').Router();
const http = require('http');
const axios = require('axios')
const request = require('request');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.route('/')
    .get((req, res) => {
        res.status(200).send({ status: 'OK' });
    });

router.route('/recipes/:ingredients')
    .get(getRecipes);

function getRecipes (req, res) {

    const ingredients = req.params.ingredients

    request(`http://www.recipepuppy.com/api/?i=${ingredients}`, function(error, response, body) {
        res.status(200).send(body)
    })
}

module.exports = router;