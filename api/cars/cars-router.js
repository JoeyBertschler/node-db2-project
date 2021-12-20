const express = require("express")
const Car = require("./cars-model")

const {
    checkCarId
} =  require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
   // res.json('getting all cars')
   try {
        const cars = await Car.getAll()
        res.status(200).json(cars)
    } catch (err) {
        next(err)
    }
})
router.get('/:id', async (req, res, next) => {
    //res.json(`getting car with id ${req.params.id}`)
    try {
        const car = await Car.getById(req.params.id)
            res.status(200).json(car)
    } catch (err) {
        next(err)
    }   
})
router.post('/', async (req, res, next) => {
    res.json('posting a new car')
})

module.exports = router