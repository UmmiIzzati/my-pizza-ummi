'use strict'

const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const getOrder = require('./handlers/pizza-order')

const Api = require('claudia-api-builder');
const api = new Api();

api.get('/hello', () => "Hello Welcome to Pizza API!")

api.get('/pizza', ()=> {
	return getPizzas()
})

api.get('/pizzas/{id}', (request) => {
	return getPizzas(request.pathParams.id)
}, {
error: 404
})

api.post('/orders', (request) => {
return createOrder(request.body)
}, {
success: 201,
error: 400
})

api.put('/orders/{id}', (request) => {
return updateOrder(request.body.request.pathParams.id)
}, {
error: 400
})

api.get('/orders', ()=> {
	return getOrder()
})

api.get('/orders/{id}', ()=> {
	return getOrder(request.pathParams.id)
},{
	error:404
})

api.delete('/orders/{id}', (request)=>{
	return deleteOrder(request.pathParams.id)
},{
	error:400
})



module.exports = api
