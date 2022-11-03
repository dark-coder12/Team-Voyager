

exports.config = {
    tests: ['Tests/getRepository.js'],
    helpers: {
      REST: {
        prettyPrintJson: true, 
        endpoint: '',
        Authorization: 'Bearer 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'
  
      },
      JSONResponse: {}
    },
    include: {
      I: './steps_file.js'
    },
    name: 'API Test'
  }