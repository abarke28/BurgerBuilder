import React from 'react';
import Aux from '../../../hoc/Auxillery';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
                </li>
        )});

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button buttonStyle="Success" click={props.continue}>Continue</Button>
            <Button buttonStyle="Danger" click={props.cancel}>Cancel</Button>
        </Aux>
    );
}

export default orderSummary;

