import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (id = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations/${id}`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    return axios.delete(url, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};