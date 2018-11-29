import React, { Component } from 'react';
import '../css/categoryItem.css';

class CategoryItem extends Component {

	render() {

		return(
			<div className = "categoryImg" onClick = {this.props.categoryClick}>
				<img src = {"http://localhost:8000" + this.props.img} alt =""/>
			</div>
		);
	}
}
export default CategoryItem;
