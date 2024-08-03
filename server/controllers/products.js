const productRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

productRouter.get('/', async (request, response) => {
  const products = await Product.find({}).populate('user', {username: 1, name: 1})
  response.json(products)
})

productRouter.post('/', async (request, response,) => {
  const body = request.body

  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ 
      error: 'token invalid'
    })
  }
  const user = await User.findById(decodedToken.id)

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

productRouter.get('/:id', async (request, response,) => {
  const product = await Product.findById(request.params.id)
    
  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

productRouter.delete('/:id', async (request, response,) => {
  await Product.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = productRouter