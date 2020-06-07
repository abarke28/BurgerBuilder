import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={stles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button className={styles.Less} onClick={props.less}>Less</button>
            <button className={styles.More} onClick={props.more}>More</button>
        </div>
    );
}

export default buildControl;