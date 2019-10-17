import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

class About extends Component {
  state = {
    urls: []
  }



  render() {
    return (
      <Container>
        <h3>This is a stand-in for actual GET functionality.</h3>
        <Button
              variant="primary"
              onClick={(e) => this.fetchURLs()}
            >
              Big button that does the thing
            </Button>
      </Container>
    )
  }
}

export default About