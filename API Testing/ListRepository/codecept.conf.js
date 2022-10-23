

exports.config = {
  tests: 'Repository_test.js',
  helpers: {
    REST: {
      prettyPrintJson: true, 
      endpoint: '',
      Authorization: 'Bearer ___'

    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'API Test'
}