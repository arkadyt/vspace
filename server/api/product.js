const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'data/test_data.json'))

const rewriter = jsonServer.rewriter({
  '/product/*': '/data?product_id=$1' 
})

module.exports = {
  jsonServerRewriter,
  jsonServer
}
