const express = require('express')
const {
  createCart,
  getCarts,
  deleteCart,
  updateCart
} = require('../controllers/cartControllers')

const router = express.router()

// GET all
router.get('/user', getCarts)

// POST
router.post('/user', createCart)

// DELETE
router.delete('/user/:id', deleteCart)

// UPDATE
router.patch('/user/:id', updateCart)

