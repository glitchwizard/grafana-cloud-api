import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(uid = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/datasources/uid/${uid}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.get(url, config)
        .then(res => res.data)
        .catch(res => res.response.data);
}