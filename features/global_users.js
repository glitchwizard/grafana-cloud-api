import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function global_user() {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/users`;
    const url = host + path;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        return err.response?.data;
    }
}