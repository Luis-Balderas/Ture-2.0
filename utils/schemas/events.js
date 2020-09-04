const joi = require('@hapi/joi');

const eventIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const eventTitleSchema = joi.string().max(80);
const eventImagesSchema =  joi.string().uri();
const eventDescriptionSchema = joi.string().max(750);
const eventLocationSchema = joi.string().max(50);
const eventPriceSchema = joi.number().max(1000000);
const eventStartDateSchema = joi.number().min(2020).max(2020);
const eventEndDateSchema = joi.number().min(2020).max(2020);
const eventOcupationSchema = joi.number().max(30);
const eventTagsSchema = joi.array().items(joi.string().max(50));

const createEventSchema = { 
   title: eventTitleSchema,
   images: eventImagesSchema,
   description:eventDescriptionSchema.required(),
   location: eventLocationSchema.required(),
   price:eventPriceSchema.required(),
   startDate:eventStartDateSchema.required(),
   andDate:eventEndDateSchema.required(),
   ocupation: eventOcupationSchema.required(),
   tags: eventTagsSchema
};

const updateEventSchema = {
    title: eventTitleSchema,
    images: eventImagesSchema,
    description:eventDescriptionSchema,
    location: eventLocationSchema,
    price:eventPriceSchema,
    startDate:eventStartDateSchema,
    andDate:eventEndDateSchema,
    ocupation: eventOcupationSchema,
    tags: eventTagsSchema
};

module.exports = {
    eventIdSchema,
    createEventSchema,
    updateEventSchema
}