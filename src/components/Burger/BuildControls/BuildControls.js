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
            {controls.map(b => (
                <BuildControl key={b.label} label={b.label} type={b.type} add={props.add} remove={props.remove}/>
             ))}
        </div>
    );
}

export default buildControls;
