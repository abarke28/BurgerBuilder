import React from 'react';
import Aux from '../../hoc/Auxillery';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, sidebar, backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;