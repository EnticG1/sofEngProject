// Preferably hardcode logo into the website instead of using GET method.
// Use GET method for images that might need to be changed.

const express = require('express')
const {
    createMenu,
    getMenus,
    getMenu,
    deleteMenu,
    updateMenu
} = require('../controllers/menuControllers')

const router = express.Router()

// Get all menus
router.get('/api/menu/', getMenus)

// Get a single menu
router.get('/api/menu/:id', getMenu)

// Test POST method
router.post('/api/menu/', createMenu) 

// Test DELETE method
router.delete('/api/menu/:id', deleteMenu)

// Test UPDATE method
router.patch('/api/menu/:id', updateMenu)

module.exports = router

// Need to finish up the routing