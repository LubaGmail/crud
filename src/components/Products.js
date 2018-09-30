import React, {Component} from 'react';
import '../App.css';
import Product from './Product';
import AddProduct from './AddProduct';

const products = [
  {
    name: 'iPad',
    price: 200.00
  }, {
    name: 'iPhone',
    price: 350.00
  }
];

localStorage.setItem('products', JSON.stringify(products));

export default class Products extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let products =  JSON.parse(localStorage.getItem('products'));
    this.setState({products: products}); 
  }

  getProducts = () => {
    return this.state.products;
  } 

  onAdd = (name, price) => {
    let products = this.getProducts();
    products.push({name, price});
    this.setState({products: products});
  }

  onEditSubmit = (name, price) => {
    let products = this.getProducts();
    let filteredProducts = products.filter(product => {
      if (product.name === name) {
        product.price = price;
      }
      return product;
    });
    
    this.setState({products: filteredProducts});
  }

  onDelete = (name) => {
    let products = this.getProducts();

    let filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({products: filteredProducts});
  }

  render() {

    return (

      <div className='productsDiv'>

        <div>
          <AddProduct 
            onAdd={this.onAdd}
          />
        </div>

        <h3>List Products</h3>
        {
          this.state.products.map(p => {
            return (

                <div key={p.name}>
                  {/* {p.name} | {p.price} */}

                  <Product 
                    {...p}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                  />
      
                </div>

            )
          })
        }
         
      </div>
    )
  }

}
