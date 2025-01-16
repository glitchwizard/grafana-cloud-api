import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function basicAuth(username = "", password = "") {
    process.env.GRAFANA_USERNAME = username;
    process.env.GRAFANA_PASSWORD = password;
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/org`;
    const url = `${host}${path}`;

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}