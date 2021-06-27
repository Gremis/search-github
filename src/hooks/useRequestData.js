import { useState, useEffect } from "react";
import { getUser } from "../services/Requests";

const useRequestData = (user, initialState) => {
  const [profileUser, setprofileUser] = useState(initialState);

  useEffect(() => {
    getUser(user)
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
