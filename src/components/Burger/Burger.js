import React from 'react';
import BurgerIngredient from './Ingredients/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
    console.log(styles.Burger);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;