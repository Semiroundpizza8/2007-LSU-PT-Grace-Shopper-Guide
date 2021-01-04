const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../db');

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    // TODO 4 - send back all products
    
  } catch (error) {
    next(error)
  }
})


module.exports = router;
