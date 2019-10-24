import React, { Component } from "react"
import URLList from "./URLList"


class About extends Component {
  state = {
    urls: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/0').then((res) => res.json()).then((body) => {
      console.log(body);
      this.setState({urls: body});
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3>This is a stand-in for actual GET functionality.</h3>
        <URLList urls={this.state.urls} />
      </React.Fragment>
    )
  }
}

export default About