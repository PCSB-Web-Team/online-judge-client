import axios from "axios";

const backend = axios.create({
  baseURL: "https://online-judge-csi.herokuapp.com/api",
});

export const login = (data, config) => {
  return backend.post("/auth/login", data, config);
};

export const signup = (data) => {
  return backend.post("/auth/signup", data);
};

export const submitCode = (code) => {
  return backend.post("/submission/", code);
};

export const runCode = (code) => {
  return backend.post("/submission/run", code);
};

export const getContests = () => {
  return backend.get("/contest");
};

export const getContestById = (contestId) => {
  return backend.get(`/contest/${contestId}`);
};

export const getQuestions = (contestId) => {
  return backend.get(`/question/contest/${contestId}`);
};

export const getQuestionById = (_id) => {
  return backend.get(`/question/${_id}`);
};

export const allSubmission = () => {
  return backend.get(`/submission/`);
};

export const userSubmission = (userId) => {
  return backend.get(`/submission/user/${userId}`);
};

export const questionSubmission = (userId, questionId) => {
  return backend.get(`/submission/${userId}/${questionId}`);
};

export const allParticipant = (contestId) => {
  return backend.get(`/participant/`);
};

export const contestRanking = (contestId) => {
  return backend.get(`/participant/ranking/${contestId}`);
};

export const getUserByToken = (token) => {
  return backend.get("/auth/", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
