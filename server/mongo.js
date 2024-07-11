const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }


const url = `mongodb+srv://ryantanliner:z6CD7l4AuZx7Qb2C
@products.elpmudf.mongodb.net/skincareRoutine?retryWrites=true&w=majority&appName=products`

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