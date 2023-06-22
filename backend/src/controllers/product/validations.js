import Joi from 'joi';

const ProductSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(3),
  category: Joi.string().required(),
  price: Joi.string().required(),
  previous_price: Joi.string().required(),
  photos: Joi.string(),
});

export default ProductSchema;
