const app = require('./app') // the actual Express application
const config = require('./utils/config')
const loggers = require('./utils/loggers')

app.listen(config.PORT, () => {
  loggers.info(`Server running on port ${config.PORT}`)
})