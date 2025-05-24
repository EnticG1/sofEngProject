const Cart = require('../models/cartModel')

// GET all
const getCarts = async (req, res) => {
  const cart = await Cart.find({}).sort({createdAt: -1})

  res.status(200).json(cart)
}

// POST
const createCart = async (req, res) => {
  const {name, request, amount, price} = req.body

  try{
    const cart = await Cart.create({name, request, amount, price})
    res.status(200).json(cart)
  } catch (error){
    res.status(400).json({error: error.message})
  }
}

// DELETE
const deleteCart = async (req, res) => {
  const { id } = req.params

  // Make sure ID is valid
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Cart not found'})
  }

  // Delete cart item by id
  const cart = await Cart.findOneAndDelete({_id: id})

  if (!cart) {
      return res.status(404).json({error: 'Cart not found'})
  }

  res.status(200).json(cart)
}

// UPDATE
const updateCart = async (req, res) => {
  const { id } = req.params

  // Make sure ID is valid
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Cart item not found'})
  }

  const cart = await Cart.findOneAndUpdate({_id: id}, {
      ...req.body
  })

  if (!cart) {
      return res.status(404).json({error: 'Cart item not found'})
  }
  
  res.status(200).json(cart)
}

module.exports = {
  createCart,
  getCarts,
  deleteCart, 
  updateCart
}