import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateCurrentOrgPrefs = (theme = 0, homeDashboardId = 0, timezone = "") => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/org/preferences`;
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

export default updateCurrentOrgPrefs;