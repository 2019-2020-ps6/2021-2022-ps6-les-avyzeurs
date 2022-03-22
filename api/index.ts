const buildServer = require('./build-server.ts')
const logger = require('./utils/logger.ts')

// @ts-ignore
buildServer((server) => logger.info(`Server is listening on port ${server.address().port}`))
