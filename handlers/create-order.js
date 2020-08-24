const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createOrder(request) {
	if (!request || !request.pizzaId || !request.address){
		throw new Error('To order pizza please provide pizza type and address where pizza should be delivered')
	}
	return docClient.put({
		TableName: 'ummi-pizza-orders',
		Item:{
			orderId:uuid.v4(),
			pizza:request.pizza,
			address:request.address,
			orderStatus:'pending'
		}
	}).promise().then((res)=>{
		console.log('Order is saved!',res)
		return res
	}).catch((saveError)=>{
		console.log('Opps, order is not saved :(', saveError)
		throw saveError
	})
}

module.exports = createOrder