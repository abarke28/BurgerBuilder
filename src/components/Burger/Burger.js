import React from 'react';
import BurgerIngredient from './Ingredients/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])]
                .map((_, index) => {
                    return <BurgerIngredient key={key + index} type={key} />;
                });
        });
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;