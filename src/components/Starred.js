import React, { useState } from "react";
import { Card, Accordion, Alert, ListGroup, Button } from "react-bootstrap";
import { BASE_URL, client_id, client_secret } from "../constants/url";
import { BsUnion, BsPaperclip } from "react-icons/bs";
import axios from "axios";

function Starred(props) {
  const [datastarred, setDatastarred] = useState([]);

  const getStarred = () => {
    axios
      .get(
        `${BASE_URL}/${props.user}/starred?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => setDatastarred(response.data))
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
              onClick={() => getStarred()}
            >
              <BsUnion /> Starred
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {datastarred.length === 0 && (
                <Alert variant="warning">
                  <Alert.Heading>Não tem repositórios mais visitados ainda</Alert.Heading>
                </Alert>
              )}{" "}
              {datastarred.length !== 0 && (
                <>
                  {datastarred.map((repo) => (
                    <ListGroup>
                      <ListGroup.Item key={repo.id}>
                        <BsPaperclip /> {" "}
                        {repo.name}
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

export default Starred;
