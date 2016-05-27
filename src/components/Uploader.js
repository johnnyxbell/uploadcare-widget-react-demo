import React, {Component} from "react";
import uploadcare from "uploadcare-widget";

class Uploader extends Component {

  componentDidMount() {
    uploadcare.start({
      publicKey: "demopublickey"
    });
    uploadcare.Widget("#Uploadcare2");
    uploadcare.Widget("#Uploadcare3");
  }

  reset() {
    uploadcare.reset();
  }

  initialize() {
    uploadcare.initialize();
  }

  destroyAll() {
    uploadcare.reset();

    let widgetInputs = document.querySelectorAll("[id^=Uploadcare");
    widgetInputs.forEach(input => {
      (uploadcare.Widget(input)).destroy();
    });
  }

  resurrectAll() {
    uploadcare.initialize();
    uploadcare.Widget("#Uploadcare2");
    uploadcare.Widget("#Uploadcare3");
  }

  render() {
    return (
      <div>
        <input type="hidden" role="uploadcare-uploader"/>
        <input type="hidden" id="Uploadcare2" data-images-only/>
        <input type="hidden" id="Uploadcare3" data-multiple/>
        <hr/>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.initialize}>initialize</button>
        <button onClick={this.destroyAll}>destroy all!</button>
        <button onClick={this.resurrectAll}>resurrect all!</button>
      </div>
    )
  }
}

export default Uploader;
