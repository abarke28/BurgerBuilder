import React from 'react';

import logoImage from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height}}>
            <img src={logoImage} alt='Poor Yorrick Burgers'/>
        </div>
    );
}

export default logo;