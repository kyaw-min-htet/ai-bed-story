import Joi from 'joi';
interface StoryRequestData {
    childName: string;
    age: number;
    theme?: string;
    moral?: string;
    length: 'short' | 'medium' | 'long';
}
interface TranslateRequestData {
    text: string;
}
export declare const storyRequestSchema: Joi.ObjectSchema<any>;
export declare const translateRequestSchema: Joi.ObjectSchema<any>;
export declare const validateStoryRequest: (data: unknown) => StoryRequestData;
export declare const validateTranslateRequest: (data: unknown) => TranslateRequestData;
export {};
//# sourceMappingURL=validator.d.ts.map