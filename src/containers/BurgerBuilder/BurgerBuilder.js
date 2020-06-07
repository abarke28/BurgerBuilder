import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
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
            totalPrice: updatedPrice,
            purchasable: true
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

            this.updatePurchaseState(updatedIngredients);
        }
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((k) => (ingredients[k]))
            .reduce((sum, el) => (sum + el), 0);

        this.setState({
            purchasable: sum > 0
        });
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinuteHandler = () => {
        console.log('Purchase Continued');
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinuteHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;