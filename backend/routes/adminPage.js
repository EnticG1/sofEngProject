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
const requireAuth = require('../middleware/requireAuth') // Make sure that only admin account can access

const router = express.Router()

router.use(requireAuth)

// Get all menus
router.get('/menu/', getMenus)

// Get a single menu
router.get('/menu/:id', getMenu)

// Test POST method
router.post('/menu/', createMenu) 

// Test DELETE method
router.delete('/menu/:id', deleteMenu)

// Test UPDATE method
router.patch('/menu/:id', updateMenu)

module.exports = router