import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const restoreDashboard = (dashboardId = 0, version = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/dashboards/id/${dashboardId}/restore`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { version };
    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default restoreDashboard;