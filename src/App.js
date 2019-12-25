import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Product from './components/Product'

class App extends Component {
    onAddProduct=()=>{
         console.log(this.refs.name.value);
    }
    render() {
        const product = [
            {
                id: 1,
                name: "Samsung Galaxy Fold",
                price: "50.000.000 VND",
                image: "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-fold-didongviet_2.jpg",
                status: true
            },
            {
                id: 2,
                name: "iPhone 11 Pro Max",
                price: "32.000.000 VND",
                image: "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/1/_/1_55_2.jpg",
                status: true
            },
            {
                id: 3,
                name: "Samsung Galaxy Note 10 Plus",
                price: "29.000.000 VND",
                image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg",
                status: true
            },
            {
                id: 4,
                name: "XiaoMi Mi Note 10",
                price: "10.000.000 VND",
                image: "https://cdn.tgdd.vn/2019/12/campaign/xiaomi-mi-note-10-white-400x460-400x460.png",
                status: true
            },
            {
                id: 5,
                name: "Nokia 1280",
                price: "1.500.000.000 VND",
                image: "https://cf.shopee.vn/file/20bd7ca87fcb0b5a9ff8789101dec309",
                status: true
            },
        ]   
        let element = product.map((product,index) =>{
            let result = '';
            if(product.status){
                result =     <Product
                            key={product.id} 
                            price={product.price}
                            image={product.image}
                            >
                            {product.name}
                            </Product>
            }

                return result
            })
            return (
            <div>
                <nav className="navbar navbar-inverse">
           o         <div className="container-fluid">
                        <a className="navbar-brand">Title</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                         
                                <div className="panel panel-danger">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Thêm Sản Phẩm</h3>
                                    </div>
                                    <div className="panel-body">
                                            <div className="form-group">
                                                <label>Tên Sản Phẩm</label>
                                                <input type="text" className="form-control" ref="name" placeholder="Nhập tên sản phẩm"/>
                                            </div>
                                     <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
                    </div>
                                    </div>
                                </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           {element} 
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default App;
