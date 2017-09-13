import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Controls extends React.Component{
    render(){
        return(
               <div className="button_wrapper">
                    
                <FloatingActionButton label="Next" primary={true} onClick={()=>{fetch(window.location.origin+"/switch")}}/>
                <FloatingActionButton label="End" secondary={true} />
            
              </div>
            )
    }
}

export default Controls;