import React from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import styles from './App.module.css';

function App() {
    console.log(styles);
    return (
        <Layout className={styles.App}>
            <BurgerBuilder/>
        </Layout>
    );
}

export default App;