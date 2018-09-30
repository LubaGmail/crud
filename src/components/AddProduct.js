import React, { Component } from 'react';
import '../App.css';

export default class AddProduct extends Component {
    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <div>
                <h3>Add Product</h3>
                <form className='addDiv' onSubmit={this.onSubmit}>
                    <input placeholder='Name'
                        ref={nameInput => this.nameInput = nameInput}
                    />
                    <input placeholder='Price'
                        ref={priceInput => this.priceInput = priceInput}
                    />
                    <button>+</button>
                </form>
            </div>
        )
    }
}
