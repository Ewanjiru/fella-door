import React from 'react';
import Counter from './counter.jsx';
import Video from './video.jsx';
import StreamContent from './stream.jsx';
import Controls from './controls.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class ParentComponet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <Counter />
          <StreamContent/>
          <Video />

          <div id="controls">
          <MuiThemeProvider>
            <Controls/>
          </MuiThemeProvider>
          </div>
      </div>
    );
  }
}
