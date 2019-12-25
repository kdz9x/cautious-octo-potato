import React, { Component } from 'react';

export class Product extends Component {
	// constructor(props) {
	// 	super(props);
	// 	console.log(props);
	// 	// this.onAddtoCart = this.onAddtoCart.bind(this);
	// }
	onAddtoCart =()=>{
		// alert(text)
		// console.log(text)
		alert(this.props.children +  ' - ' + this.props.price)
	}
	render() {
		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div className="thumbnail">
						<img alt="{this.props.children}" src={this.props.image} />
						<div className="caption">
							<h3>
								{this.props.children}
							</h3>
							<p>
								{this.props.price}
							</p>
							<p>
								<a className="btn btn-primary" onClick={this.onAddtoCart}>Mua ngay </a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Product;
