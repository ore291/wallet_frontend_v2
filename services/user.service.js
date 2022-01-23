import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);





export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  fundBalance,
  getUser,
  transferBalance,
  withdrawBalance,
  verifyKyc,
  register
};

async function login(email, password) {
  const user = await axios.post(`${baseUrl}/auth/login`, { email, password });
  // publish user to subscribers and store in local storage to stay logged in between page refreshes
  userSubject.next(user);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

async function register(name, email, password) {
  const user = await axios.post(`${baseUrl}/auth/register`, {name,  email, password });
  // publish user to subscribers and store in local storage to stay logged in between page refreshes
  return user;
}

async function fundBalance(amount, password, id) {
  const res = await axios.post(`${baseUrl}/deposit`, { amount, password, id });

  return res;
}

async function verifyKyc(id) {
  const res = await axios.post(`${baseUrl}/verify`, { id });

  return res;
}

async function withdrawBalance(amount, password, id) {
  const res = await axios.post(`${baseUrl}/withdraw`, { amount, password, id });
  return res;
}

async function transferBalance(amount, password, id, rec_email) {
  const res = await axios.post(`${baseUrl}/transfer`, { amount, password, id, rec_email });

  return res;
}
async function getUser(id, token) {
try {
    const res = await axios.get(`${baseUrl}/users/${id}`, 
    { headers: {"Authorization" : `Bearer ${token}`} });
    return res;
} catch (error) {
  console.log(error);
}
  
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login");
}
