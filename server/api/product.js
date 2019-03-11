const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(global.__basedir + '/data/test_data.json')

const rewriter = jsonServer.rewriter({
  '/product/*': '/data?product_id=$1',
  '/products': '/data'
})

module.exports = {
  jsonServerRewriter: rewriter,
  jsonServer: router
}
