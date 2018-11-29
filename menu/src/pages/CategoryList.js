import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import FoodList from './FoodList';
import '../css/categoryList.css';
import relation from '../api/relation';


class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: null,
			foods: []
		};
		this.showFoods = this.showFoods.bind(this);
		this.createOrder = this.createOrder.bind(this);


	}

	showFoods(category) {

		this.setState({show: category});
		relation.getFoods(category.id, (foods) => {
		this.setState({
		  "foods": foods
		})
   });

	}
	createOrder(id,foodName, price) {

		this.props.handleOrder(id,foodName,price);
	}
	render() {
		let categories = this.props.categories;

		let items = categories.map((category) => {
					return <CategoryItem key = {category.id} img = {category.category_img}
					categoryClick = {()=> this.showFoods(category)}/>
				});
		let shownFoods = null;
		if(this.state.show!=null) {

			shownFoods = <FoodList id = {this.state.show.id} foods = {this.state.foods}
							createOrder = {(id,foodName,price)=>this.createOrder(id,foodName,price)}/>
			//console.log(this.state.show.foods)
		}

		return(
			<div className = "content">
				<div className = "categoryList">
					{items}
				</div>
				<div className="service">
					{shownFoods}
				</div>
			</div>
		);
	}

}

export default CategoryList;
