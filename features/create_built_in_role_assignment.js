import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function createBuiltInRoleAssignment(roleUid = '', builtinRole = '', global = false) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/builtin-roles`;
    const url = `${host}${path}`;
    const data = { roleUid, builtinRole, global };

    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}