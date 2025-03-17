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
router.get('/menu/', getMenus)

// Get a single menu
router.get('/menu/:id', getMenu)

// Test POST method
router.post('/menu/', createMenu) // Delete later

// Test DELETE method
router.delete('/menu/:id', deleteMenu)

// Test UPDATE method
router.patch('/menu/:id', updateMenu)

module.exports = router

// Need to finish up the routing