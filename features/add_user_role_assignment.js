import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function addUserRoleAssignment(userId = 0, global = false, roleUid = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/users/${userId}/roles`;
    const url = `${host}${path}`;
    const data = { global, roleUid };

    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}