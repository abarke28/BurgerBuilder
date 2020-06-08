import React from 'react';
import Aux from '../../hoc/Auxillery';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends React.Component {
    state = {
        drawerOpen: false
    };

    sideDrawerToggleHandler = () => {
        const oldDrawerState = this.state.drawerOpen;
        const newDrawerState = !oldDrawerState;

        this.setState({ drawerOpen: newDrawerState });
    }

    render() {
        return (
            <Aux>
                <Toolbar showSideDrawer={this.sideDrawerToggleHandler}/>
                <SideDrawer show={this.state.drawerOpen} click={this.sideDrawerToggleHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>        
        );
    }
}

export default Layout;