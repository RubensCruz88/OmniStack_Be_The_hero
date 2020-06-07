const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const CasosController = require('./controllers/CasosController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/perfil', celebrate({
	[Segments.HEADERS]: Joi.object().keys({
		authorization: Joi.string().required(),
	}).unknown()
}),PerfilController.index);

routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2)
	})
}),OngController.create);


routes.get('/ongs',OngController.index);
routes.delete('/ongs',OngController.delete);

routes.post('/casos',CasosController.create);
routes.get('/casos',celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number(),
	})
}),CasosController.index);

routes.delete('/casos/:id',celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required()
	})
}),CasosController.delete);

module.exports = routes;
