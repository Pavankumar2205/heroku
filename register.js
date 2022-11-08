const joi=require('joi')

const registervalidation=(data)=>{
    const register=joi.object({
        name:joi.string().required(),
        mail:joi.string().required().email(),
        password:joi.string().required().min(8),
        phno:joi.string().required()    
    })
    return register.validate(data)
}
module.exports.registervalidation=registervalidation