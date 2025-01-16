import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const pauseAlertById = (alert_id = 0, paused = true) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/alerts/${alert_id}/pause`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { paused };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default pauseAlertById;