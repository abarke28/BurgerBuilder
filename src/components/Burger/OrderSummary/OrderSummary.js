import React from 'react';
import Aux from '../../../hoc/Auxillery';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    componentDidUpdate() {
        console.log('Order Summary Updated');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
                </li>
            )
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicous burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button buttonStyle="Success" click={this.props.continue}>Continue</Button>
                <Button buttonStyle="Danger" click={this.props.cancel}>Cancel</Button>
            </Aux>
        );
    }
}

export default OrderSummary;