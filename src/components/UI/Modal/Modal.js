import React from 'react';
import Aux from '../../../hoc/Auxillery';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = (props) => {
    return (
        <Aux>
            <div className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}>
                {props.children}
            </div>
            <Backdrop show={props.show} click={props.modalClosed}/>
        </Aux>
    );
}

export default modal;