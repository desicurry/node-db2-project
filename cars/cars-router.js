const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruits' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruit' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const change = req.body;
  db('cars').where( { id } )
  .update(change)
  .then(count => {
    if (count) {
      res.status(200).json({ update: count });
    } else {
      res.status(404).json({ message: 'invalid id' });
    }
  })
  .catch();
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('cars')
  .where('id', id)
  .del()
  .then((count) => {
    if (count > 0) {
      res.status(200).json({data: count });
    } else {
      res.status(404).json({ message: 'There is no record to delete'});
    }
  })
  .catch()
})

module.exports = router;