import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;

const reloadLdapConfig = () => {
    const path = `/api/admin/ldap/reload`;
    const url = host + path;
    return axios.post(url)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default reloadLdapConfig;