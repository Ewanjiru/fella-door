import React from 'react';

const style = {
  marginRight: 10,
  marginBottom: 2,
};

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) { this.setState({ value }); }

  render() {
    return (
      <div className="video-wrapper">
          <video id="selfVideo"></video>
      </div>
    );
  }
}

export default Video;
