const routineRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')

routineRouter.get('/', async (request, response) => {
  const products = await Product.find({}).populate('user', {username: 1, name: 1})
  response.json(products)
})

routineRouter.post('/', async (request, response,) => {
  const body = request.body

  const user = await User.findById(body.userId)

  const product = new Product({
    name: body.name,
    type: body.type,
    purpose: body.purpose,
    am: body.am,
    user: user.id
  })

  const savedProduct = await product.save()
  user.products = user.products.concat(savedProduct._id)
  await user.save()

  response.status(201).json(savedProduct)
})

routineRouter.get('/:id', async (request, response,) => {
  const product = await Product.findById(request.params.id)
    
  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

routineRouter.delete('/:id', async (request, response,) => {
  await Product.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = routineRouter