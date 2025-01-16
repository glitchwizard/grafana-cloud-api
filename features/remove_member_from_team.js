import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const removeMemberFromTeam = (teamId = 0, userId = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/teams/${teamId}/members/${userId}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.delete(url, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default removeMemberFromTeam;