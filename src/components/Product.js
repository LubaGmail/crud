import React, {Component} from 'react';
import '../App.css';

export default class Product extends Component {

    state = {
        isEdit: false
    }
    
    onDelete = () => {
        // name, onDelete(name), price, key
        //
        this.props.onDelete(this.props.name);
    }

    onEditSubmit = (event) => {
        event.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value);
        this.setState({isEdit: false});
    }

    onEdit = () => {
        this.setState({isEdit: true});
    }

    render() {
        const {name, price} = this.props;

        return (
            <div className='productDiv'>

                <div>
                    {this.state.isEdit
                        ? (
                            <form className='addDiv' onSubmit={this.onEditSubmit}>
                                <input defaultValue={name} readOnly
                                    ref={nameInput => this.nameInput = nameInput}
                                />
                                <input defaultValue={price} 
                                    ref={priceInput => this.priceInput = priceInput}
                                />
                                <button>Save</button>
                            </form>
                        )
                        : (
                            <div>
                                <span>{name}</span>
                                {` | `}
                                <span>{price}</span>
                                {` | `}
                                <button onClick={this.onDelete}>x</button>
                                {` | `}
                                <button onClick={this.onEdit}>Edit</button>
                            </div>
                        )
                    }
                </div>

            </div>
        )
    }

}
