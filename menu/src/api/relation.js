const BASE_URL = 'http://localhost:8000';


module.exports = {
	getCategories(success) {
		fetch(`${BASE_URL}/menuapp/categories/`)
	   .then(response => response.json())
	   .then(success)
	},

	getFoods(id, success) {
		fetch(`${BASE_URL}/menuapp/categories/${id}/foods`)
	   .then(response => response.json())
	   .then(success)
	},

	createOrder(data, success) {
		fetch(`${BASE_URL}/menuapp/order/send/`, {
			'method': 'POST',
			'body': JSON.stringify(data)
		})
		.then(response => response.json())
	   .then(success)
	},

	getFood(food_id, success) {
		fetch(`${BASE_URL}/categories/category/foods/${food_id}`)
	   .then(response => response.json())
	   .then(success)
	},

	getMyOrder(order_id, success) {
		fetch(`${BASE_URL}/menuapp/myOrder/${order_id}`)
	   .then(response => response.json())
	   .then(success)
	}
}
