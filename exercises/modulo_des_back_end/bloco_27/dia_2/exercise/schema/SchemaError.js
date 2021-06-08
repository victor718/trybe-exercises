const errors = {
  cepInvalido: 'CEP inválido',
  cepNotExists: 'CEP não encontrado',
  messageJoi: (message) => message,
  cepExists: 'CEP já existente',
}

const code = {
  invalid: 'invalidData',
  notFound: 'notFound',
  invalidData: 'invalidData',
  exists: 'alreadyExists',
}


module.exports = (errorsCep) => {
  if(!errorsCep) return {
    status: 404,
    error: {
      code: code.notFound,
      message: errors.cepInvalido
    }
  };
  if(errorsCep.length === 0) return {
    status: 404,
    error: {
      code: code.notFound,
      message: errors.cepNotExists
    }
  };
  if(typeof errorsCep === 'object') return {
    status: 400,
    error: {
      code: code.invalidData,
      message: errors.messageJoi(errorsCep.error.details[0].message)
    }
  };
  if(errorsCep === 'alreadyExists') return {
    status: 409,
    error: {
      code: code.exists,
      message: errors.cepExists,
    }
  };
  return {}
}
