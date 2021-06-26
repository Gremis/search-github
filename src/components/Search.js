import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Search(props) {
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Procurar usuário"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        type="text"
        value={input}
        onChange={handleChangeInput}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => props.onClicked(input)}>
          Procurar
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Search;
