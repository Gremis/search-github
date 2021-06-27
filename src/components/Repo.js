import React, { useState } from "react";
import { Card, Accordion, Alert, ListGroup, Button } from "react-bootstrap";
import { BsServer, BsPaperclip } from "react-icons/bs";
import { getRepos } from "../services/Requests";

function Repo(props) {
  const [datarepos, setDatarepos] = useState([]);

  const handleClickRepos = (user) => {
    getRepos(user)
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
              onClick={() => handleClickRepos(props.user)}
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
