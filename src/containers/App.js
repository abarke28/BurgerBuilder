import React from 'react';
import styles from './App.module.css';

function App() {
    console.log(styles);
    return (
        <div className={styles.App}>
            <h1>Burger Builder</h1>
        </div>
    );
}

export default App;
