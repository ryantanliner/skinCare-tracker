const { test, after, beforeEach, describe } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const assert = require('node:assert')
const app = require('../app')
const Product = require('../models/product')

const User = require('../models/user')
const bcrypt = require('bcrypt')

const helper = require('./test_helper')

const api = supertest(app)

describe('When there are 2 products initially', async () => {
  beforeEach(async() => {
    await Product.deleteMany({})
    await Product.insertMany(helper.initialProducts)
  })

  test('routines are returned as json', async () => {
    await api
      .get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('There are 2 products', async () => {
    const response = await api.get('/api/products')

    assert.strictEqual(response.body.length, helper.initialProducts.length)
  })

  test('A new product can be added', async () => {
    const newProd = {
      name: "Aestura Moisturizer",
      type: "Moisturizer",
      purpose: "Heal face",
      am: null
    }

    await api
      .post('/api/products')
      .send(newProd)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/products')

    assert.strictEqual(response.body.length, helper.initialProducts.length + 1)

  })

  test('Product can be deleted', async () => {
    const prodsBefore = await helper.productsInDb()
    const prodToDel = prodsBefore[0]

    await api
      .delete('/api/products/${prodToDel.id}')
      .expect(204)
    
    const prodsNow = await helper.productsInDb()

    assert.strictEqual(prodsNow.length, helper.initialProducts.length - 1)
  })
})
describe('when there is one user in db', async () => {

  beforeEach( async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('secret', 10)
    const user = new User({username: "root", password: passwordHash})
    await user.save()
  })

  test('New user can be created with unique username', async () => {
    const usersBefore = await helper.usersInDb()

    const newUser = {
      username: 'temp',
      name: 'temporary',
      password: 'jimin'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersNow = await helper.usersInDb()
    assert.strictEqual(usersNow.length, usersBefore.length + 1)

  })

  test('Fail to create username if username is already taken', async () => {
    const usersBefore = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'rooter',
      password: 'rooting'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
    
    const usersNow = await helper.usersInDb()
    assert(result.body.error.includes('expected `username` to be unique'))
    assert.strictEqual(usersNow.length, usersBefore.length)
  })
})

after(async () => {
  await mongoose.connection.close()
})