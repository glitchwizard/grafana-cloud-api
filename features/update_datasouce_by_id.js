import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateDatasourceById = (datasourceId = 0, data = { Name: '', Type: '', Url: '', Access: '' }, optional = {
    uid: 'I2A2141nk',
    password: '',
    user: '',
    database: '',
    basicAuth: false,
    basicAuthUser: '',
    basicAuthPassword: '',
    withCredentials: false,
    isDefault: false,
    jsonData: { httpMethod: 'POST', authType: 'keys', defaultRegion: 'us-west-1' },
    secureJsonData: {
        accessKey: '',
        secretKey: '',
        basicAuthPassword: "",
    }
}) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/datasources/${datasourceId}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    Object.assign(data, optional);
    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateDatasourceById;