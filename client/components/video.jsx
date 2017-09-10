import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Webcam from 'react-webcam';
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
          <div className="button_wrapper">
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={5} primaryText="5minutes" />
              <MenuItem value={10} primaryText="10minutes" />
              <MenuItem value={15} primaryText="15minutes" />
            </DropDownMenu>
            <RaisedButton label="End Call" secondary={true} style={style} />
            <RaisedButton label="Next Call" primary={true} style={style} />

          </div>
          <div className="webcam">
            <CardText>
              <Webcam />
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Video;
