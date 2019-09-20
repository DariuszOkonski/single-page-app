import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/Page.css';

class ContactPage extends React.Component {
  state = {
    value: "",
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>

          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type something..."
          ></textarea>
          <button>Send</button>
        </form>

        <Prompt
          when={this.state.value.length > 0}
          message='Are you sure you want to leave?'
        />

      </div>
    );
  }

}

export default ContactPage;