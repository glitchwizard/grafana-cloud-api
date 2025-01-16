import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(id = 0) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/users/${id}/teams`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.get(url, config)
    .then(res => { return res.data })
    .catch(res => { return res.response.data })
}