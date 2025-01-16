import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function addOrgUser(orgId = 0, loginOrEmail = '', role = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/orgs/${orgId}/users`;
    const url = `${host}${path}`;
    const data = { role, loginOrEmail };
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