import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function changePassword(oldPassword = '', newPassword = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/user/password`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { oldPassword, newPassword };

    try {
        const res = await axios.put(url, data, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}