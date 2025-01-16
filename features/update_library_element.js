import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateLibraryElement = (uid = '', optional = { folderId: 0, name: '', kind: '', version: 0, model: { description: '', type: '' } }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/library-elements/${uid}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { ...optional };
    return axios.patch(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateLibraryElement;