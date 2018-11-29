import React, {Component} from 'react';
import FoodItem from './FoodItem';


class FoodList extends Component {
constructor(props) {
	super(props);
	this.state = {
		food_id: 1
	}
	this.takeOrder = this.takeOrder.bind(this);
}
takeOrder(id,foodName,price) {
	console.log(id, foodName)
	this.setState({food_id: id})
	this.props.createOrder(this.state.food_id,foodName,price);
}

render() {
		let foods = this.props.foods;
		let items = foods.map((food) => {
					return <FoodItem key = {food.id} img = {food.food_img} name = {food.food_name}
					description = {food.food_desc} price = {food.food_price}
					weight = {food.food_weight}
					takeOrder={()=>this.takeOrder(food.id,food.food_name,food.food_price)} />
				});
		return(
			<div>
				{items}
			</div>
		);
	}
}

export default FoodList;
