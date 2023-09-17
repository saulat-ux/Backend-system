const express = require('express')
const router = express.Router();

const {getAllProperty,
    createProperty,
    updateProperty,
    getProperty,
    deleteProperty} = require('../controllers/properties')

router.route('/').get(getAllProperty).post(createProperty)
router.route('/:id').get(getProperty).patch(updateProperty).delete(deleteProperty)

module.exports = router