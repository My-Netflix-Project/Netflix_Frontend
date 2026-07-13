import axios from 'axios';

export default axios.create({
    baseURL:'http://13.53.71.243:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
