import axios from 'axios';
import { API_BASE } from './consts';

export default axios.create({
    baseURL: API_BASE,
});
