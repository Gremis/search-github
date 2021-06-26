import { useState } from "react";
import {
  Card,
  Image,
  Accordion,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import { BASE_URL, client_id, client_secret } from "../constants/url";
import axios from "axios";

function Profile(props) {
  const [datarepos, setDatarepos] = useState([]);
  const [datastarred, setDatastarred] = useState([]);

  const getRepos = () => {
    axios
      .get(
        `${BASE_URL}/${props.data.login}/repos?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => {
        setDatarepos(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  const getStarred = () => {
    axios
      .get(
        `${BASE_URL}/${props.data.login}/starred?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then((response) => setDatastarred(response.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <Image src={props.data.avatar_url} roundedCircle />
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.bio}</Card.Text>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  onClick={() => getRepos()}
                >
                  Repos
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

          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  onClick={() => getStarred()}
                >
                  Starred
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {datastarred.length === 0 && (
                    <Alert variant="warning">
                      <Alert.Heading>Não tem favoritos ainda</Alert.Heading>
                    </Alert>
                  )}{" "}
                  {datastarred.length !== 0 && (
                    <>
                      {datastarred.map((repo) => (
                        <ListGroup>
                          <ListGroup.Item key={repo.id}>
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
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;
