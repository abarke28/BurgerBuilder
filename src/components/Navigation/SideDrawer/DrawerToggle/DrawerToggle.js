import React from 'react';
import logoImage from '../../../../assets/images/burger-logo.png';

import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <button className={styles.DrawerToggle} onClick={props.click}>
            <img src={logoImage} alt="="/>
        </button>
     );
}

export default drawerToggle;