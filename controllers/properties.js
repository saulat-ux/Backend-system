const Property = require('../models/property')
const getAllProperty = (req, res)  =>{
    res.send('all properties')
}
const getProperty = (req, res)  =>{
    res.json({id:req.params.id})
}
const createProperty = async (req, res)  =>{
    const property = await Property.create(req.body)
    res.status(201).json({property})
}
const updateProperty = (req, res)  =>{
    res.send('update property')
}
const deleteProperty = (req, res)  =>{
    res.send('delete property')
}

module.exports = {
    getAllProperty,
    deleteProperty,
    updateProperty,
    createProperty,
    getProperty
}