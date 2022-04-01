const buildServer = require('./build-server.js')
const logger = require('./utils/logger.js')

// @ts-ignore
buildServer((server) => logger.info(`Server is listening on port http://localhost:${server.address().port}`))
