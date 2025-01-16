import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function createCustomRole(data = {
    version: 0,
    uid: "",
    name: "",
    description: "",
    group: "",
    displayName: "",
    global: false,
    permissions: [{ action: "", scope: "" }]
}) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/roles`;
    const url = `${host}${path}`;

    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}