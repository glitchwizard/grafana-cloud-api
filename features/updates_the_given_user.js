import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateUser = (userId = 0, role = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/org/users/${userId}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { role };

    return axios.patch(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateUser;