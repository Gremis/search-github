import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useRequestData from "../hooks/useRequestData";
import Header from "../components/Header";
import Search from "../components/Search";
import Profile from "../components/Profile";

function Main() {
  const [user, setUser] = useState("");
  const profileUser = useRequestData(user, {})
  const handleChangeInput = (input) => {
    setUser(input);
  };

  return (
    <Container>
      <Header />
      <Search onClicked={handleChangeInput} />
      {profileUser.name !== undefined && <Profile profileUser={profileUser} />}
    </Container>
  );
}

export default Main;
