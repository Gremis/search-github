import React from "react";
import { Card, Image } from "react-bootstrap";
import Repo from "./Repo";
import Starred from "./Starred";

function Profile(props) {
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <Image src={props.profileUser.avatar_url} roundedCircle />
        </Card.Header>
        <Card.Body>
          <Card.Title>Nombre: {props.profileUser.name}</Card.Title>
          <Card.Title>Mora em: {props.profileUser.location}</Card.Title>
          <Card.Text>{props.profileUser.bio}</Card.Text>
          <Card.Text>Seguidores: {props.profileUser.followers}</Card.Text>
          <Card.Text>Seguindo: {props.profileUser.following}</Card.Text>
          <Card.Text>Número de Repositórios: {props.profileUser.public_repos}</Card.Text>
          <Repo user={props.profileUser.login} />
          <Starred user={props.profileUser.login} />
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;
