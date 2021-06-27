import axios from "axios";
import { BASE_URL, client_id, client_secret } from "../constants/url";

export const getUser = async (user) => {
  return await axios.get(
    `${BASE_URL}/${user}?client_id=${client_id}&client_secret=${client_secret}`
  );
};

export const getRepos = async (user) => {
  return await axios.get(
    `${BASE_URL}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`
  );
};

export const getStarred = async (user) => {
  return await axios.get(
    `${BASE_URL}/${user}/starred?client_id=${client_id}&client_secret=${client_secret}`
  );
};
