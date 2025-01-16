import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function switch_org_context(org_id=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/user/using/${org_id}`
    const url = host + path
    return axios.post(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}