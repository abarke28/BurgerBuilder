import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillery';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
    return class extends React.Component {

        state = {
            error: null
        };


        componentDidMount() {
            this.requestInterceptor = axiosInstance.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });

            this.responseInterceptor = axiosInstance.interceptors.response.use(res=>res, error => {
                return (
                    this.setState({ error: error })
                );
            });
        }

        componentWillUnmount() {
            axiosInstance.interceptors.request.eject(this.requestInterceptor);
            axiosInstance.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux> 
            );
        }
    }
};

export default withErrorHandler;