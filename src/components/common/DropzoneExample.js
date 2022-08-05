import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import "dropzone/dist/min/dropzone.min.css";

class Dropzone extends Component {
  render() {
    var componentConfig = { postUrl: 'no-url' };
    var djsConfig = { autoProcessQueue: false }
    var eventHandlers = { addedfile: (file) => console.log(file) }
    return (
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={eventHandlers} className="dropify"
        djsConfig={djsConfig}
        {...this.props}
      />
    );
  }
}

export default Dropzone;
