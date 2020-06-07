import React from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillery.js';

class BurgerBuilder extends React.Component {

    render () {
        return (
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;