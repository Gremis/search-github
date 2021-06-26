import React, { useState } from "react";
import { Card, Accordion, Alert, ListGroup, Button } from "react-bootstrap";
import { BASE_URL, client_id, client_secret } from "../constants/url";
import { BsServer, BsPaperclip } from "react-icons/bs";
import axios from "axios";

function Repo(props) {
  const [datarepos, setDatarepos] = useState([]);

  const getRepos = () => {
    axios
      .get(
        `${BASE_URL}/${props.user}/repos?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => {
        setDatarepos(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              onClick={() => getRepos()}
            >
              <BsServer /> Repos
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {datarepos.length === 0 && (
                <Alert variant="warning">
                  <Alert.Heading>Não tem repositórios ainda</Alert.Heading>
                </Alert>
              )}{" "}
              {datarepos.length !== 0 && (
                <>
                  {datarepos.map((repo) => (
                    <ListGroup>
                      <ListGroup.Item key={repo.id}>
                        <BsPaperclip /> {repo.name}
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </>
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default Repo;
