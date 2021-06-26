import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  BsPersonFill,
  BsGeo,
  BsBookHalf,
  BsPeopleFill,
  BsPeople,
  BsServer,
} from "react-icons/bs";
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
          <Card.Title>
            <BsPersonFill /> {props.profileUser.name}
          </Card.Title>
          <Card.Title>
            <BsGeo /> {props.profileUser.location}
          </Card.Title>
          <Card.Text>
            <BsBookHalf /> {props.profileUser.bio}
          </Card.Text>
          <Card.Text>
            <BsPeopleFill /> {props.profileUser.followers}
          </Card.Text>
          <Card.Text>
            <BsPeople /> {props.profileUser.following}
          </Card.Text>
          <Card.Text>
            <BsServer /> {props.profileUser.public_repos}
          </Card.Text>
          <Repo user={props.profileUser.login} />
          <Starred user={props.profileUser.login} />
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;
