import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SampleContentComponent from "./SampleContentComponent";
import PreviousNextButtonComponent from "./PreviousNextButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state.startValue = 0;
    this.state.endvalue = this.state.totalrowsperpage;
  }
  state = {
    sampledata: [
      { Name: "Test1", Number: 1 },
      { Name: "Test2", Number: 2 },
      { Name: "Test3", Number: 3 },
      { Name: "Test4", Number: 4 },
      { Name: "Test5", Number: 5 },
      { Name: "Test6", Number: 6 },
      { Name: "Test7", Number: 7 }

    ],
    startValue: 0,
    endvalue: 0,
    totalrowsperpage: 3,
    isTableupdated:false
  };

  handleNextClicked = () => {
    this.setState({isTableupdated:false});
    if ((this.state.endvalue+this.state.totalrowsperpage) <= this.state.sampledata.length) {
      console.log("Next button clicked");
      this.state.startValue = this.state.endvalue;
      console.log("B4 Start : ",this.state.startValue," End : ",this.state.endvalue);
      //this.setState({startValue:this.state.endvalue});
      console.log("start value", this.state.startValue);
      this.state.endvalue = this.state.startValue + (this.state.totalrowsperpage);
      console.log("end value ", this.state.endvalue);
    }
    else if((this.state.endvalue < this.state.sampledata.length) && (this.state.endvalue+this.state.totalrowsperpage)>this.state.sampledata.length)
    {
      this.setState({startValue:this.state.endvalue});
      this.state.endvalue = this.state.sampledata.length;
      console.log("Inside ELse if start value",this.state.startValue," end value", this.state.endvalue);
    }
    else
    {
      console.log("Next is disabled");
    }

    this.setState({isTableupdated:true});
  };
  handlePreviousClicked = () => {
    this.setState({isTableupdated:false});
    if ((this.state.startValue-this.state.totalrowsperpage) >= 0 && (this.state.startValue % this.state.totalrowsperpage) === 0 ) {
      console.log("Previous button clicked");
      //this.setState({endvalue:this.state.startValue});
      this.state.endvalue = this.state.startValue;
      this.state.startValue = this.state.startValue-this.state.totalrowsperpage;
      console.log("start value", this.state.startValue);

      console.log("end value ", this.state.endvalue);
    }
    else if((this.state.startValue % this.state.totalrowsperpage) != 0 && this.state.startValue >= 0 )
    {
      this.state.endvalue = this.state.startValue;
      //this.setState({endvalue:this.state.startValue});
      this.state.startValue = this.state.endvalue - this.state.totalrowsperpage;
      console.log("Inside previous ELse if start value",this.state.startValue," end value", this.state.endvalue);
    }
    else
    {
      console.log("previous is disabled");
    }
    this.setState({isTableupdated:true});
  };
  render() {
    var isNextEnabled = true;
    var isPreviousEnabled = true;
    if(this.state.startValue == 0)
    {
      isPreviousEnabled = false;
      console.log("In Previous Disabled");
    }
    if(this.state.endvalue == this.state.sampledata.length)
    {
      isNextEnabled = false;
      console.log("In Next Disabled");
    }
    return (
      <div>
        <SampleContentComponent sampledata={this.state.sampledata} startvalue={this.state.startValue} endvalue={this.state.endvalue} />
        <PreviousNextButtonComponent
          handleNextButton={() => this.handleNextClicked}
          handlePreviousButton={() => this.handlePreviousClicked}
          isNextEnabled = {isNextEnabled}
          isPreviousEnabled = {isPreviousEnabled}
        />
      </div>
    );
  }
}

export default App;
