import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Webcam from 'react-webcam';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StreamContent from './stream.jsx';

const style = {
  marginRight: 10,
  marginBottom: 2,
};

const Video = () => (
  <div className="video-wrapper">
    <Card>
      <div className="button_wrapper">
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>

      <div className="webcam">
        <CardText>
          <StreamContent />
          <video id="selfVideo"></video>
        </CardText>
      </div>
    </Card>
  </div>
);

export default Video;
