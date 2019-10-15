import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

class Home extends Component {
  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="lorem-ipsum.demo"
            aria-label="Website URL"
            aria-describedby="submitURL"
          />
          <InputGroup.Append>
            <Button
              variant="secondary"
              onClick={() => alert("submit")}
            >
              Annotate
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    )
  }
}

export default Home