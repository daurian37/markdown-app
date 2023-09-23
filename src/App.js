import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    text: sampleText,
  };

  //Quand on fait monter le component ou recharge la page
  componentDidMount() {
    const text = localStorage.getItem('text');

    if (text) {
      this.setState({ text });
    }else{
      this.setState({ text: sampleText });
    }
  }

  //quand on fait une mise à jour
  componentDidUpdate(){
    const { text } = this.state;
    localStorage.setItem('text', text);
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35"
            />
          </div>

          <div className="col-sm-6">
            <ReactMarkdown>{this.state.text}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
