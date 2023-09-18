const Property = require('../models/property')
const getAllProperty = async (req, res)  =>{
   try {
    const properties = await Property.find({})
    res.status(200).json({properties})
   } catch (error) {
    res.status(500).json({msg:error})
    
   }
}
const getProperty = async (req, res)  =>{
    try {
        const {id:propertyID} = req.params
        console.log(req.params)
        console.log(propertyID)
        console.log(typeof (propertyID))
        const property = await Property.findOne({_id:propertyID})
    if(!property){
        return res.status(404).json({msg: `no property with id : ${propertyID}`})
    }
    res.status(200).json({property})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
}
const createProperty = async (req, res)  =>{
    try {
        const property = await Property.create(req.body)
        res.status(201).json({property})
        
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error)
    }
}
const deleteProperty = async (req, res)  =>{
    try {
        const {id:propertyID} = req.params
        const property = await Property.findOneAndDelete({_id:propertyID})
        if(!property){
            res.status(404).json({ msg: `property not found ${propertyID}`})
        }
        res.status(200).json({property})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateProperty = async (req, res)  =>{
    try {
        const {id:propertyID} = req.params
        const property = await Property.findOneAndUpdate({_id:propertyID}, req.body,{
            new:true,runValidators:true,
        })
        if(!property){
            res.status(404).json({ msg: `property not found ${propertyID}`})
        }
        res.status(200).json({property})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

module.exports = {
    getAllProperty,
    deleteProperty,
    updateProperty,
    createProperty,
    getProperty
}