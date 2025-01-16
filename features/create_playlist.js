import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (name = "", interval = "5m", items = [{ type: "", value: '', order: 1, title: "" }]) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/playlists/`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    const data = { name, interval, items };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};