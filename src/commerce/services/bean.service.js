import {enviroment} from "@/enviroments/enviroment.js";
import axios from "axios";
class BeanService {
    constructor() {
        this.baseUrl = enviroment.baseUrl;
    }

    getBeans() {
        return axios.get(`${this.baseUrl}/api/Beans`)
    }
}

export default BeanService