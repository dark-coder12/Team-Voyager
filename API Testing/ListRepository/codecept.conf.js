

exports.config = {
  tests: ['Tests/getRepository.js'],
  helpers: {
    REST: {
      prettyPrintJson: true, 
      endpoint: '',
      Authorization: 'Bearer ${process.env.key}'

    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'API Test'
}