import axios from "axios";

const backend = axios.create({
    baseURL : "https://online-judge-csi.herokuapp.com/api"
});

export const login = (data,config) => {
    return backend.post("/auth/login",data,config);
}