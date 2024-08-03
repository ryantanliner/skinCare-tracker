const User = require('../models/user')
const Product = require('../models/product')

const initialProducts = [
  {
    name: "Anua Toner",
    type: "Toner",
    purpose: "Hydrate Skin",
    am: null
  },
  {
    name: "Roundlab Sunscreen",
    type: "Sunscreen",
    purpose: "Sun Protection",
    am: true
  }
]

const productsInDb = async() => {
  const products = await Product.find({})
  return products.map(prod => prod.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialProducts,
  productsInDb,
  usersInDb
}