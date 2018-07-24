var Mock = require('mockjs')
var Random = Mock.Random
Mock.setup({
  timeout: 0 - 300
})

var email = Random.email()

Mock.mock('/api/restaurants/', 'post', {
  'code': 0,
  'data': {
    'name': '@CNAME',
    'userId': '123456',
    'username': 'jhsziit',
    'email': email
  },
  'message': 'success'
})
