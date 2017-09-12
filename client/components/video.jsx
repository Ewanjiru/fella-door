import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Webcam from 'react-webcam';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StreamContent from './stream.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
        <Card>
          <div className="webcam">
            <CardText id="videos">
              <StreamContent />
              <video id="selfVideo"></video>
              <div className="button_wrapper">
                <RaisedButton label="Next Call" primary={true} style={style} />
                <RaisedButton label="End Call" secondary={true} style={style} />
                
              </div>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Video;
