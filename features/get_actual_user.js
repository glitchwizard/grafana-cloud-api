import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function() {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/user`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.get(url, config)
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(res => res.response.data);
}