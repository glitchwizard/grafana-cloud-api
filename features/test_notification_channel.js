import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const testNotificationChannel = (type = "", settings = {}) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/alert-notifications/test`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { type, settings };
    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default testNotificationChannel;