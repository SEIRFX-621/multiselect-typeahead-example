const express = require('express');
const router = express.Router();

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
        ]
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

module.exports = router;