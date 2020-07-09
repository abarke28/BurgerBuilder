import React from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

function App() {
    return (
        <Layout className={styles.App}>
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch>
        </Layout>
    );
}

export default App;