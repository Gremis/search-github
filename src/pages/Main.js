import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BASE_URL, client_id, client_secret } from "../constants/url";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Profile from "../components/Profile";

function Main() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
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

  const handleChangeInput = (input) => {
    setUser(input);
  };

  return (
    <Container>
      <Header />
      <Search onClicked={handleChangeInput} />
      {data.length !== 0 && <Profile data={data} />}
    </Container>
  );
}

export default Main;
