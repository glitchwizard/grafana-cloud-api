import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function delete_api_key(id=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/auth/keys/${id}`
    const url = host + path
    return axios.delete(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}