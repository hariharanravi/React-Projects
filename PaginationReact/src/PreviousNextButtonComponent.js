import React, { Component } from "react";

class PreviousNextButtonComponent extends Component {
    constructor(props){
        super(props);
        console.log("props content",this.props);
        console.log(this.handleNextButton);
        console.log(this.props.handleNextButton);
        
    }
  state = {};
  render() {
    return (
      <div className="pagination-buttons">
        <button className="btn btn-primary" onClick={this.props.handlePreviousButton()} disabled={!this.props.isPreviousEnabled}>Previous</button>
        &nbsp; &nbsp;
        <button className="btn btn-primary" onClick={this.props.handleNextButton()} disabled = {!this.props.isNextEnabled}>Next</button>
      </div>
    );
  }
}

export default PreviousNextButtonComponent;
