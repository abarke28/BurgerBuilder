import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxillery.js';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 1
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;

        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceIncrease = INGREDIENT_PRICES[type];
        const updatedPrice = oldPrice + priceIncrease;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
    }       

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const oldCount = this.state.ingredients[type];
            const oldPrice = this.state.totalPrice;

            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const priceDecrease = INGREDIENT_PRICES[type];
            const updatePrice = oldPrice - priceDecrease;

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatePrice
            });
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;