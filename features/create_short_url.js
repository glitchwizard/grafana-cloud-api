import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (path_of_url = "") => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/short-urls`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    const data = { path: path_of_url };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};