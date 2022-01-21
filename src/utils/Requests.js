import axios from "axios";

const backend = axios.create({
    baseURL: "https://online-judge-csi.herokuapp.com/api"
});

export const login = (data, config) =>
{
    return backend.post("/auth/login", data, config);
}
export const signup = (data) =>
{
    return backend.post("/auth/signup", data);
}
export const getContests = (contestData) =>
{
    return backend.get("/contest");
}
export const getQuestions = () =>
{
    return backend.get("/question/all");
}
export const getUserByToken = (token) =>
{
    return backend.get("/auth/", {
        headers: { Authorization: `Bearer ${ token }` }
    })
}