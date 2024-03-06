const joi = require('@hapi/joi')

const datayRegisterValidate = (date)=>{
    let schema = joi.object({
        type: joi.string().required(),
        value: joi.number().required()
    })
    return schema.validate(date)
}

module.exports = {datayRegisterValidate}