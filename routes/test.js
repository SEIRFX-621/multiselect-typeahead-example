const express = require('express');
const router = express.Router();

let checkbox1 = false;
let checkbox2 = true;
let checkbox3 = false;

router.get('/', (req, res) => {
    res.render('form', {
        multiselectItems: [
            {
                name: 'asparagus',
                id: 1
            },
            {
                name: 'black beans',
                id: 2
            },
            {
                name: 'chowder',
                id: 3
            },
            {
                name: 'dumplings',
                id: 4
            },
            {
                name: 'enchilada',
                id: 5
            },
            {
                name: 'testing A',
                id: 6
            },
            {
                name: 'gnocchi',
                id: 7
            },
            {
                name: 'testing A',
                id: 8
            },{
                name: 'huenos rancheros',
                id: 9
            }
        ],
        checkbox1,
        checkbox2,
        checkbox3
    })
})

router.put('/selectPut', (req, res) => {
    console.log(req.body.selectOptions);
})

router.put('/putTest', (req, res) => {
    console.log(`PUT request produced: ${req.body.testing}`);
    res.redirect('/test');
})

router.delete('/deleteTest', (req, res) => {
    console.log(`DELETE request produced: ${req.body.testing}`);
    res.redirect('/test');
})

router.put('/checkboxPutTest', (req, res) => {
    const checkboxBodyKey = Object.keys(req.body)[0];
    console.log(`PUT checkbox submit test request produced:`);
    console.log(`${checkboxBodyKey}: ${req.body[checkboxBodyKey]}`);
    checkbox1 = req.body['check1'] ? true: false;
    checkbox2 = req.body['check2'] ? true: false;
    checkbox3 = req.body['check3'] ? true: false;
    res.redirect('/test');
})

module.exports = router;