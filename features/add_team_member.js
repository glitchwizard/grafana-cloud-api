import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function addTeamMember(teamId = 0, userId = 0) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/teams/${teamId}/members`;
    const url = `${host}${path}`;
    const data = { userId };
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    try {
        const res = await axios.post(url, data, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}