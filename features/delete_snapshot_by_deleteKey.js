import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(deleteKey = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/snapshots-delete/${deleteKey}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.delete(url, config)
        .then(res => res.data)
        .catch(res => res.response.data);
}