const mongoose = require('mongoose')



mongoose.set('strictQuery', false)

mongoose.connect(url)

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  purpose: String,
  am: Boolean
})

const Product = mongoose.model('Product', productSchema)

const product = new Product({
  name: "Aestura Moisturizer",
  type: "Moisturizer",
  purpose: "Moisturize skin",
  am: false
})

product.save().then(result => {
  console.log('product saved!')
  mongoose.connection.close()
})