import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(tags = [''], optional = { limit: 100, from: 0, to: Date.now() }) {
    let parameters = tags.map(tag => `tags=${tag}`).join('&');
    if (Object.keys(optional).length > 0) {
        parameters += '&';
        const keys = Object.keys(optional);
        const values = Object.values(optional);
        parameters += keys.map((key, index) => `${key}=${values[index]}`).join('&');
    }
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations?${parameters}`;
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