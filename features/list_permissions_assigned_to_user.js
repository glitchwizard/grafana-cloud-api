import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(userId = 0) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/users/${userId}/permissions`;
    const url = host + path;
    return axios.get(url)
        .then(res => res.data)
        .catch(res => res.response.data);
}