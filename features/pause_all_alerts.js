import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const pauseAllAlerts = (paused = true) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/admin/pause-all-alerts`;
    const url = host + path;
    const data = { paused };

    return axios.post(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default pauseAllAlerts;