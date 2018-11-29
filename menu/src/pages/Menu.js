import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Order from './Order';
import relation from '../api/relation';


import '../css/menu.css';

class Menu extends Component {
 constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this);
    this.pushToOrderArr = this.pushToOrderArr.bind(this);
    this.createOrder = this.createOrder.bind(this);

    this.state = {
      categories: [],
      orders: [],
      order_id: 0,
      food_id: 0,
      totalSum: 0
    };

  }

  componentDidMount(){

    relation.getCategories((categories) => {
      this.setState({
        categories: categories
      });
      
    });
  }

  pushToOrderArr(idd,foodNamee, pricee) {
    console.log(idd);
    this.state.orders.push({
        id: idd,
        name: foodNamee,
        price: pricee
    });
    this.setState({
      totalSum:this.state.totalSum+pricee,
      orders: this.state.orders,
      food_id: idd
    });

  }

    deleteOrder(index,price) {
    var updOrders = this.state.orders;
    updOrders.splice(index,1);
    this.setState({totalSum:this.state.totalSum-price});
    this.setState({orders: updOrders});
  }

  createOrder() {
      console.log("zawel v create order")

      const data = {
        'orders': this.state.orders,
      }

      relation.createOrder(data, async (newOrder)=> {

        console.log("It is neworder:" + newOrder);
        alert("Your order has been sent!!!  № of Order is " +
          newOrder.order);
      });

    }

    render() {
    return (
      <div className="menu">
        <div className="littleMenuPage">
          <div className="imgMenu"></div>
          <div className="container clearfix">
              <div className="categoryList service">
              <CategoryList categories = {this.state.categories}
                            handleOrder= {(id,foodName,price)=>this.pushToOrderArr(id,foodName,price)} />
               </div>
               <div className="service">
              <Order orders = {this.state.orders} deleteOrder={this.deleteOrder}
              handleSend = {this.createOrder} totalSum={this.state.totalSum}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
