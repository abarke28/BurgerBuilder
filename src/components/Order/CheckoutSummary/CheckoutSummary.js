import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We Hope it Tastes Great!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonStyle="Danger"
                click={props.checkoutCancelled}>CANCEL</Button>
            <Button buttonStyle="Success"
                click={props.checkoutContinued}>CONTINUTE</Button>
        </div>            
    );
}

export default checkoutSummary;