import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function addExternalGroup(teamId = 0, data = { cn: "", ou: "", dc1: "", dc2: "" }) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/teams/${teamId}/groups`;
    const url = `${host}${path}`;

    const groupData = {
        "groupId": `cn=${data.cn},ou=${data.ou},dc=${data.dc1},dc=${data.dc2}`
    };

    try {
        const res = await axios.post(url, groupData);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}