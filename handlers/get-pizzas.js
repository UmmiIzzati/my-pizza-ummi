const pizzas = require('../data/pizzas.json')
function getPizzas(pizzaId) {
	if (!pizzaId){
		return pizzas
	}
	const pizza = pizzas.find((pizza) => {
		return pizza.id == pizzaId
	})
	if (pizza){
		return pizza
		throw new Error('The Pizza requested not found')
	}
}

module.exports = getPizzas