import React, {Component} from "react";
import uploadcare from "uploadcare-widget";

class Uploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    };
  }

  componentDidMount() {
    window.addEventListener("popstate", () => {
      uploadcare.closeDialog();
    });
    
    uploadcare.start({
      publicKey: "demopublickey"
    });

    this.pushState(this.state);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.page != this.state.page) {
      this.pushState(nextState);
    }
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }

  prevPage() {
    if (this.state.page === 0)
      return;

    this.setState({
      page: this.state.page - 1
    });
  }

  pushState(state) {
    history.pushState(state, null, `page${state.page}.html`);
  }

  render() {
    return (
      <div>
        <input type="text" role="uploadcare-uploader"/>
        <hr/>
        <span>{this.state.page}</span>
        <button onClick={() => this.nextPage()}>next</button>
        <button onClick={() => this.prevPage()}>prev</button>
      </div>
    )
  }
}

Uploader.propTypes = { page: React.PropTypes.number };
Uploader.defaultProps = { page: 0 };

export default Uploader;
