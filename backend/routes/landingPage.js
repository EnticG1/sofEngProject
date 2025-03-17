// Preferably hardcode logo into the website instead of using GET method.
// Use GET method for images that might need to be changed.

const express = require('express')
const {
    createMenu, // delete later, dont need to create menu in the landing page
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
router.post('/api/menu/', createMenu) // Delete later

// Test DELETE method
router.delete('/api/menu/:id', deleteMenu) // Delete later

// Test UPDATE method
router.patch('/api/menu/:id', updateMenu) // Delete later

module.exports = router

// Need to finish up the routing