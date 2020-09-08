const joi = require('@hapi/joi');

const eventIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const eventNameSchema = joi.string().max(80);
const eventImagesSchema = joi.array().items(joi.string());
const eventDescriptionSchema = joi.string().max(750);
const eventLocationSchema = joi.string().max(50);
const eventPriceSchema = joi.number().max(1000000);
const eventStartDateSchema = joi.date();
const eventEndDateSchema = joi.date();
const eventOcupationSchema = joi.number().max(30);
const eventcreatedAt = joi.date();

const createEventSchema = {
  name: eventNameSchema.required(),
  images: eventImagesSchema.required(),
  description: eventDescriptionSchema.required(),
  location: eventLocationSchema.required(),
  price: eventPriceSchema.required(),
  startDate: eventStartDateSchema.required(),
  endDate: eventEndDateSchema.required(),
  ocupation: eventOcupationSchema.required(),
  createdAt: eventcreatedAt,
};

const updateEventSchema = {
  name: eventNameSchema,
  images: eventImagesSchema,
  description: eventDescriptionSchema,
  location: eventLocationSchema,
  price: eventPriceSchema,
  startDate: eventStartDateSchema,
  andDate: eventEndDateSchema,
  ocupation: eventOcupationSchema,
};

module.exports = {
  eventIdSchema,
  createEventSchema,
  updateEventSchema,
};
