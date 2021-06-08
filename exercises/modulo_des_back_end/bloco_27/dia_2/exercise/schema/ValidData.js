const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string()
    .min(9)
    .max(9)
    .required()
    .pattern(new RegExp(/\d{5}-\d{3}/)),
  logradouro: Joi.string()
    .min(5)
    .max(50)
    .required()
    .pattern(new RegExp(/\w/)),
  bairro: Joi.string()
    .min(2)
    .max(20)
    .required()
    .pattern(new RegExp(/\w\s?\w?/)),
  localidade: Joi.string()
    .min(3)
    .max(20)
    .required()
    .pattern(new RegExp(/^\w\s?\w?/)),
  uf: Joi.string()
    .alphanum()
    .min(2)
    .max(2)
    .required()
    .regex(new RegExp(/^[A-Z]+$/)),
});


module.exports = (newData) => {
    const result = schema.validate(newData);
    if(result.error) {
      return result;
    }
    return result.value;
}
