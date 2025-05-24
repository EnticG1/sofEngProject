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

const upload = require('../middleware/uploadImage')

const router = express.Router()

// Routes
router.get('/menu/', getMenus)
router.get('/menu/:id', getMenu)
router.post('/menu/', upload.single('image'), createMenu) 
router.delete('/menu/:id', deleteMenu)
router.patch('/menu/:id', updateMenu)

module.exports = router