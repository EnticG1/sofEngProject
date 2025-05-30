const Menu = require('../models/menuModel')
const mongoose = require('mongoose')

// GET all menus
const getMenus = async (req, res) => {
    const menu = await Menu.find({}).sort({createdAt: -1})

    res.status(200).json(menu)
}


// GET a single menu
const getMenu = async (req, res) => {
    const { id } = req.params

    // Make sure ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Menu not found'})
    }

    // Find menu by ID
    const menu = await Menu.findById(id)

    // If menu is not found, retur error.
    if (!menu) {
        return res.status(404).json({error: 'Menu not found'})
    }

    res.status(200).json(menu)
}

// create new menu
const createMenu = async (req, res) => {
    let menuItem = new Menu({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price
    })
    if(req.file){
      menuItem.image = req.file.path
    }

    // Check if there are empty fields in the form
    let emptyFields = []

    if(menuItem.name == null){
        emptyFields.push('name')
    }
    if(menuItem.desc == null){
        emptyFields.push('desc')
    }
    if(menuItem.price == null){
        emptyFields.push('price')
    }
    if (menuItem.image == null){
        emptyFields.push('image')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the data', emptyFields})
    }

    // Add doc to db
    try{
        const menu = await Menu.create(menuItem)
        res.status(200).json(menu)
    } catch(error) { // Catch error
        res.status(400).json({error: error.message, emptyFields})
    }
}

// delete a menu
const deleteMenu = async (req, res) => {
    const { id } = req.params

    // Make sure ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Menu not found'})
    }

    // Delete menu by id
    const menu = await Menu.findOneAndDelete({_id: id})

    if (!menu) {
        return res.status(404).json({error: 'Menu not found'})
    }

    res.status(200).json(menu)
}

// update a menu

const updateMenu = async (req, res) => {
    const { id } = req.params

    // Make sure ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Menu not found'})
    }

    const menu = await Menu.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!menu) {
        return res.status(404).json({error: 'Menu not found'})
    }
    
    res.status(200).json(menu)
}

// Export
module.exports = {
    createMenu,
    getMenu,
    getMenus,
    deleteMenu,
    updateMenu
}