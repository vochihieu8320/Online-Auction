const Joi = require('@hapi/joi');

//regis
const regisValidate = (data: any) => {
    const schema =Joi.object({
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6)
        .required().email(),
        password: Joi.string()
        .min(6)
        .required()
        
    })  
    return schema.validate(data)
};

const loginValidate = (data: any) => {
    const schema =Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    })
    return schema.validate(data)
};

const validateFile = (file: any) => {
    let file_size = file.size/1024/1024;
    if(file_size > 8){
        return false
    }
    let file_type = file.mimetype.split('/');
    if(file_type[0] != "image"){
        return false
    }
    return true

}
export default {regisValidate,loginValidate, validateFile}