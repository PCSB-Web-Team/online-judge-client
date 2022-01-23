import axios from "axios";

const backend = axios.create({
    baseURL: "https://online-judge-csi.herokuapp.com/api"
});

export const login = (data, config) => {
    return backend.post("/auth/login", data, config);
}
export const signup = (data) => {
    return backend.post("/auth/signup", data);
}
export const getContests = () => {
    return backend.get("/contest");
}
export const getQuestions = (contestId) => {
    return backend.get(`/question/contest/${contestId}`);
}
export const getSpecificQuestions = (_id) => {
    return backend.get(`/question/${_id}`);
}
export const getSubmission = () => {
    return backend.get("/submission");
}
export const getUserByToken = (token) => {
    return backend.get("/auth/", {
        headers: { Authorization: `Bearer ${token}` }
    })
}