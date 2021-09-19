import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  heading: string;
  paragraph: string;
  buttonMessage: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'React',
      paragraph: ' Start editing to see some magic happen :)',
      buttonMessage: '',
    };
  }

  handleClick(event: Event) {
    this.setState({
      buttonMessage: `I got Clicked at ${new Date(event.timeStamp)} `,
    });
    console.log(event.timeStamp);
  }

  render() {
    return (
      <div>
        <Hello title={this.state.heading} paragraph={this.state.paragraph} />
        <Button message="click me" onClick={(e) => this.handleClick(e)} />
        <p>{this.state.buttonMessage}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
