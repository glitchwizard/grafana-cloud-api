import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function authTokensForUser(user_id = 0) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/admin/users/${user_id}/auth-tokens`;
    const url = `${host}${path}`;

    try {
        const res = await axios.post(url);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}