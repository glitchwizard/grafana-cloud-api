import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const removeBuiltInRoleAssignment = (builtinRole = '', roleUID = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/builtin-roles/${builtinRole}/roles/${roleUID}`;
    const url = host + path;
    return axios.delete(url)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default removeBuiltInRoleAssignment;