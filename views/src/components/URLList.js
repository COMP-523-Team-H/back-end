import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

class URLList extends Component {
  render() {
    const listItems = this.props.urls.map((url) => (<li key={url._id}>{url.url}</li>));
    return (
      <Container>
        <ul>
            {listItems}
        </ul>
      </Container>
    )
  }
}

export default URLList