import axios from "axios";

const backend = axios.create({
  baseURL: "http://pcsb-oj.eastus.cloudapp.azure.com/api",
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
  return backend.post("/run", code);
};

export const getRunDetails = (runToken) => {
  return backend.get(`/run/${runToken}`);
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

export const submissionById = (submissionId) => {
  return backend.get(`/submission/${submissionId}`);
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

export const checkIfUserRegistered = (userId, contestId) => {
  return backend.get(`/participant/${userId}/${contestId}`);
};
