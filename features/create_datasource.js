import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function createDatasource(data = { orgId: 0, name: "", type: "", url: '', access: '' }, optional = {
    isDefault: false,
    basicAuth: false,
    basicAuthUser: '',
    secureJsonData: { basicAuthPassword: true, password: true },
    jsonData: { httpMethod: 'POST', authType: 'keys', defaultRegion: 'us-west-1' },
    secureJsonData: {
        accessKey: '',
        secretKey: '',
        basicAuthPassword: "",
    }
}) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/datasources`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    if (optional !== {}) {
        const keys = Object.keys(optional);
        const value = Object.values(optional);
        for (let i = 0; i < keys.length; i++) {
            data[keys[i]] = value[i];
        }
    }

    try {
        const res = await axios.post(url, data, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}