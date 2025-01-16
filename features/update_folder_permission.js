import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateFolderPermission = (uid = "", items = [
    { role: "", permission: 1 },
    { role: "", permission: 2 },
    { teamId: 1, permission: 1 },
    { userId: 0, permission: 0 }
]) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/folders/${uid}/permissions`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { items };

    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateFolderPermission;