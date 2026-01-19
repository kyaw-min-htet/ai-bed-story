import Joi from 'joi';
export const storyRequestSchema = Joi.object({
    childName: Joi.string().min(1).max(50).required(),
    age: Joi.number().integer().min(1).max(18).required(),
    theme: Joi.string().allow('').max(100).optional(),
    moral: Joi.string().allow('').max(200).optional(),
    length: Joi.string().valid('short', 'medium', 'long').default('medium')
});
export const translateRequestSchema = Joi.object({
    text: Joi.string().min(1).max(10000).required()
});
export const validateStoryRequest = (data) => {
    const { error, value } = storyRequestSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
    return value;
};
export const validateTranslateRequest = (data) => {
    const { error, value } = translateRequestSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
    return value;
};
//# sourceMappingURL=validator.js.map