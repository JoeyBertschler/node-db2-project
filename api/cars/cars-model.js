const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
 return db('cars').where('id', id).first()
}

const create = () => {

}

module.exports = { //module.exports is a variable that can be used to export a function or variable
    getAll,
    getById,
    create
}