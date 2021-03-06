import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    return (
        <button className={[styles.Button, styles[props.buttonStyle]].join(' ')} onClick={props.click} >{props.children}</button>
    );
}

export default button;

