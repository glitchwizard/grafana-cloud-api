import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateCustomRole = (uid = '', data = {
    version: 0,
    name: "",
    description: "",
    group: "",
    displayName: "",
    global: false,
    permissions: [{ action: "", scope: "" }]
}) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/roles/${uid}`;
    const url = host + path;

    return axios.put(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateCustomRole;