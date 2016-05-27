import React, {Component} from "react";
import uploadcare from "uploadcare-widget";

class Uploader extends Component {

  componentDidMount() {
    uploadcare.start({
      publicKey: "demopublickey"
    });
  }

  render() {
    return (
      <div>
        <input type="text" role="uploadcare-uploader" data-preview-step/>
      </div>
    )
  }
}

export default Uploader;
