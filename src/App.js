import React, {Component} from 'react';

class App extends Component {
  state = {examples: ["One", "Two", "Three"], description: 0}

  componentDidMount() {
    const subheader = document.getElementById('example')
    let text = 'Lets connect...';
    this.type(text, subheader);
  }

  deleteLine = (e, string) => {
    const deleter = (i) => {
      i--
      if (i < 0) {
        const {description, examples} = this.state
        e.value = '';
        this.setState({description: this.state.description + 1})
        if (description === 2) {
          this.setState({description: 0})
        }
        let currentExample = examples[description]
        this.type(currentExample, e)
        return;
      }
      e.innerText = string.substring(0, i);
      setTimeout(() => {
        deleter(i);
      }, 50);
    };
    deleter(string.length + 1);
  };

  type = (string, e) => {
    const writer = (i) => {
      if (string.length <= i++) {
        e.value = string;
        setTimeout(() => {
          this.deleteLine(e, string);
        }, 1000);
        return;
      }
      e.innerText = string.substring(0, i);
      setTimeout(() => {
        writer(i);
      }, 50);
    };
    writer(0);
  };

  render() {
    return (
      <p id='example'></p>
    );
  }
}



export default App;

