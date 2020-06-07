import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const buildControls = (props) => {
    const controls = [
        {label: 'Lettuce', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(b => (
                <BuildControl
                    key={b.label}
                    label={b.label}
                    type={b.type}
                    add={props.add}
                    remove={props.remove}
                    disabled={props.disabled[b.type]}/>
            ))}
            <button
                className={styles.OrderButton}
                disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;
