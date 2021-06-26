import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/favicon.ico"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Search GitHub
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
