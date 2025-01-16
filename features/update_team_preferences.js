import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateTeamPreferences = (teamId = 0, data = { theme: '', homeDashboardId: 2, timezone: '' }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/teams/${teamId}/preferences`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateTeamPreferences;