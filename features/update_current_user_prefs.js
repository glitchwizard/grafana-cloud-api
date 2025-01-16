import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateCurrentUserPrefs = (theme = '', homeDashboardId = 0, timezone = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/user/preferences`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { theme, homeDashboardId, timezone };
    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateCurrentUserPrefs;