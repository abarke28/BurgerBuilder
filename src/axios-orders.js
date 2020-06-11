import axios from 'axios';

const ordersEndpoint = axios.create({
    baseURL: "https://burgerbuilder-d76ef.firebaseio.com/"
});

export default ordersEndpoint;