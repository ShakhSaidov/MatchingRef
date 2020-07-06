import React from "react";
import MinusButton from "./assets/minus.svg";
import PlusButton from "./assets/plus.svg";
import "./App.css";
import ResourceFooter from "./ResourceFooter.jsx";

import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";

class MethodCallOnWrongType extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openStrategy3: false,
      openCode11: false,
      openCode21: false,
      openCode31: false,
      checked11: false,
      checked21: false,
      checked31: false
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        break;
      case 2:
        this.setState({ openStrategy2: !this.state.openStrategy2 });
        this.setState({ openCode21: false });
        break;
      case 3:
        this.setState({ openStrategy3: !this.state.openStrategy3 });
        this.setState({ openCode31: false });
        break;
      default:
        break;
    }
  }

  openCodeExample(i) {
    switch (i) {
      case 11:
        this.setState({ openCode11: !this.state.openCode11 });
        break;
      case 21:
        this.setState({ openCode21: !this.state.openCode21 });
        break;
      case 31:
        this.setState({ openCode31: !this.state.openCode31 });
        break;
      default:
        break;
    }
  }

  changeChecked(i) {
    switch (i) {
      case 11:
        this.setState({ checked11: !this.state.checked11 });
        break;
      case 21:
        this.setState({ checked21: !this.state.checked21 });
        break;
      case 31:
        this.setState({ checked31: !this.state.checked31 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <div className="Title">
            <h2>
              Cannot invoke <div className="InputValue">{this.props.methodName}()</div>{" "} 
              on <div className="InputValue">{this.props.typeOneName}</div> type <div className="InputValue">{this.props.typeTwoName}</div>
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use a method{" "}
              <div className="InputValue">{this.props.methodName}()</div> on <div className="InputValue">{this.props.typeOneName}</div> {" "}
              type of data <div className="InputValue">{this.props.typeTwoName}</div>. Methods can't be applied to{" "}
              <div className="InputValue">{this.props.typeOneName}</div> types, which include{" "}
                  boolean, byte, char, short, int, long, float and double.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have used an existing method <div className="InputValue">{this.props.methodName}()</div> {" "}
                  on a <div className="InputValue">{this.props.typeOneName}</div> type <div className="InputValue">{this.props.typeTwoName}</div>
                </h4>
              </div>
              {!this.state.openStrategy1 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(1)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy1 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(1)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>

            {this.state.openStrategy1 && (
              <div className="StrategyContainer">
                <i>Tick the box once you have tried the suggestion</i>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(11)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked11}
                        onChange={() => this.changeChecked(11)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Change the variable you are using {" "}
                        <p className="InputValue">{this.props.methodName}()</p> on.
                      </div>
                    </div>
                    {!this.state.openCode11 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(11)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode11 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(11)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode11 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0"> String{" "}
                            {this.props.varName}{" "}
                            = "{this.props.varName}";{" "}
                            <div className="Indent-0"> {this.props.typeTwoName} s1 = 5; </div>
                            <div className="Indent-0"> {this.props.typeTwoName} s2 = s1.{this.props.methodName}(); </div>
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> String{" "}
                            {this.props.varName}{" "}
                            = "{this.props.varName}";{" "}
                            <div className="Indent-0"> {this.props.typeTwoName} s1 = 5; </div>
                            <div className="Indent-0"> {this.props.typeTwoName} s2 = {this.props.varName}.{this.props.methodName}(); </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(2)}>
              <div className="ErrorMessage">
                <h4>
                  2: You may have used the method <div className="InputValue">{this.props.methodName}()</div> of class {" "}
                  <div className="InputValue">{this.props.className}</div> {" "}
                  that you created, on <div className="InputValue">{this.props.typeOneName}</div> type <div className="InputValue">{this.props.typeTwoName}</div>
                </h4>
              </div>
              {!this.state.openStrategy2 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(2)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy2 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(2)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>
            {this.state.openStrategy2 && (
              <div className="StrategyContainer">
                  <i>Tick the box once you have tried the suggestion</i>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(21)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked21}
                        onChange={() => this.changeChecked(21)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Create a <div className="InputValue">{this.props.className}</div> {" "}
                        object and call <div className="InputValue">{this.props.methodName}()</div> on it.
                      </div>
                    </div>
                    {!this.state.openCode21 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(21)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode21 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(21)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode21 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                      <div className="RedCode">
                          <div className="Indent-0"> class {this.props.className}{"{"} 
                            <div className="Indent-1"> {this.props.className}(){"{"} 
                              <div className="Indent-2"> ... </div>
                              <div className="Indent-1"> {"}"} </div>
                              </div>
                            <div className="Indent-0"> </div>
                            <div className="Indent-1"> {this.props.typeTwoName} {this.props.methodName}(){"{"} 
                              <div className="Indent-2"> ... </div>
                              <div className="Indent-1"> {"}"} </div>
                              </div>
                            <div className="Indent-0"> {"}"} </div>
                          </div>
                          <div className="Indent-0">{this.props.typeTwoName} s1 = 5;</div>
                          <div className="Indent-0">{this.props.typeTwoName} s2 = s1.{this.props.methodName}();</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> class {this.props.className}{"{"} 
                            <div className="Indent-1"> {this.props.className}(){"{"} 
                              <div className="Indent-2"> ... </div>
                              <div className="Indent-1"> {"}"} </div>
                              </div>
                            <div className="Indent-0"> </div>
                            <div className="Indent-1"> {this.props.typeTwoName} {this.props.methodName}(){"{"} 
                              <div className="Indent-2"> ... </div>
                              <div className="Indent-1"> {"}"} </div>
                              </div>
                            <div className="Indent-0"> {"}"} </div>
                          </div>
                          <div className="Indent-0">
                            {this.props.className} {this.props.varName} = {" "} 
                            new {this.props.className}();
                            </div>
                          <div className="Indent-0">{this.props.typeTwoName} s1 = 5;</div>
                          <div className="Indent-0">{this.props.typeTwoName} s2 = {this.props.varName}.{this.props.methodName}();</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(3)}>
              <div className="ErrorMessage">
                <h4>
                  3: You may have tried to use the method <div className="InputValue">{this.props.methodName}()</div> {" "}
                  that you created globally, on <div className="InputValue">{this.props.typeOneName}</div> type <div className="InputValue">{this.props.typeTwoName}</div>{" "}
                  (Global methods are made outside setup() and draw(),{" "}
                  and can be accessed anywhere in the code)
                </h4>
              </div>
              {!this.state.openStrategy3 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(3)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy3 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(3)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>
            {this.state.openStrategy3 && (
              <div className="StrategyContainer">
                <i>Tick the box once you have tried the suggestion</i>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(31)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked31}
                        onChange={() => this.changeChecked(31)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Use <div className="InputValue">{this.props.methodName}()</div> by itself, and assign it to a proper type variable.
                      </div>
                    </div>
                    {!this.state.openCode31 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(31)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode31 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(31)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode31 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0"> {this.props.typeTwoName} s1 = 6; </div> 
                          <div className="Indent-0"> {this.props.typeTwoName} {this.props.methodName}() {LEFT_CURLY}</div>  
                          <div className="Indent-1"> return s1*s1;</div>
                          <div className="Indent-0"> {RIGHT_CURLY} </div>
                          <div className="Indent-0"> {this.props.typeTwoName} s2 = s1.{this.props.methodName}();</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> {this.props.typeTwoName} s1 = 6; </div> 
                          <div className="Indent-0"> {this.props.typeTwoName} {this.props.methodName}() {LEFT_CURLY}</div>  
                          <div className="Indent-1"> return s1*s1;</div>
                          <div className="Indent-0"> {RIGHT_CURLY} </div>
                          <div className="Indent-0"> {this.props.typeTwoName} s2 = {this.props.methodName}();</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <ResourceFooter />
        </div>
      </div>
    );
  }
}

export default MethodCallOnWrongType;