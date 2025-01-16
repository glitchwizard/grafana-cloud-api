import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function basicAuthUsingToken(token = "") {
    process.env.GRAFANA_TOKEN = token;
    const host = `http://api_key:${process.env.GRAFANA_TOKEN}@${process.env.GRAFANA_HOST}`;
    const path = `/api/org`;
    const url = `${host}${path}`;

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}