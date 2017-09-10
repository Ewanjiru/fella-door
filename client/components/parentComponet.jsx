import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './sidebar.jsx';
import Video from './video.jsx';

export default class ParentComponet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <MuiThemeProvider>
          <Sidebar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Video />
        </MuiThemeProvider>
      </div>
    );
  }
}
