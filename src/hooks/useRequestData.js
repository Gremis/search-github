import { useState, useEffect } from "react";
import { BASE_URL, client_id, client_secret } from "../constants/url";
import axios from "axios";

const useRequestData = (user, initialState) => {
  const [profileUser, setprofileUser] = useState(initialState);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => {
        if (response.status === 200) {
          setprofileUser(response.data);
        } else if (response.status === 404) {
          alert("Usuário Inválido!");
        }
      })
      .catch((error) => {
        if (user !== "") {
          alert("Usuário Inválido!");
        }
      });
  }, [user]);

  return profileUser;
};

export default useRequestData;
