const router = require('express').Router();
const http = require('http');

router.route('/')
    .get((req, res) => {
        res.status(200).json({ status: 'OK' });
    });

router.route('/recipes/:ingredients')
    .get(getRecipes);

function getRecipes (req, res) {
    const options = {
        host: `http://www.recipepuppy.com/api/`,
        path: req.params.ingredients
    }   
    return http.request(options, (res) => {
        console.log('status', res)
    })
}

module.exports = router;