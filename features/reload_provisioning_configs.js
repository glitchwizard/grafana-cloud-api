import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;

const reloadProvisioningConfigs = {
    dashboards: () => {
        const path = `/api/admin/provisioning/dashboards/reload`;
        const url = host + path;
        return axios.post(url)
            .then(res => res.data)
            .catch(res => res.response.data);
    },
    datasources: () => {
        const path = `/api/admin/provisioning/datasources/reload`;
        const url = host + path;
        return axios.post(url)
            .then(res => res.data)
            .catch(res => res.response.data);
    },
    plugins: () => {
        const path = `/api/admin/provisioning/plugins/reload`;
        const url = host + path;
        return axios.post(url)
            .then(res => res.data)
            .catch(res => res.response.data);
    },
    notifications: () => {
        const path = `/api/admin/provisioning/notifications/reload`;
        const url = host + path;
        return axios.post(url)
            .then(res => res.data)
            .catch(res => res.response.data);
    },
    access_control: () => {
        const path = `/api/admin/provisioning/access-control/reload`;
        const url = host + path;
        return axios.post(url)
            .then(res => res.data)
            .catch(res => res.response.data);
    },
    all: async () => {
        const paths = [
            `/api/admin/provisioning/dashboards/reload`,
            `/api/admin/provisioning/datasources/reload`,
            `/api/admin/provisioning/plugins/reload`,
            `/api/admin/provisioning/notifications/reload`,
            `/api/admin/provisioning/access-control/reload`,
        ];
        const data = [];
        for (const path of paths) {
            const url = host + path;
            try {
                const res = await axios.post(url);
                data.push(res.data);
            } catch (res) {
                data.push(res.response.data);
            }
        }
        return data;
    }
};

export default reloadProvisioningConfigs;