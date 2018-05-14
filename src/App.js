import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {examples: ["One", "Two", "Three"], description: 0}

  componentDidMount() {
    const subheader = document.getElementById('example')
    let text = 'Lets connect...';
    this.type(text, subheader);
  }

  addNum = () => {
    const {description} = this.state
    this.setState({
      description: this.state.description++
    })
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
      let rand = 25;
      setTimeout(() => {
        deleter(i);
      }, rand);
    };
    deleter(string.length + 1);
  };

  type = (string, e) => {
    const writer = (i) => {
      if (string.length <= i++) {
        e.value = string;
        setTimeout(() => {
          this.deleteLine(e, string);
        }, 1200);
        return;
      }
      e.innerText = string.substring(0, i);
      let rand = Math.floor(Math.random() * 50 + 1);
      setTimeout(() => {
        writer(i);
      }, rand);
    };
    writer(0);
  };

  render() {
    return (
      <div>
        <p id='example'></p>
      </div>

    );
  }
}

export default App;

