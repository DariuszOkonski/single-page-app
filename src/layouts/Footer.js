import React from 'react';
import { Route } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route exact path='/' render={(props) => <p>{props.match.url}</p>} />
      <Route exact path='/:page' render={(props) => <p>{props.match.url}</p>} />
      <Route exact path='/:page/:name' render={(props) => <p>{props.match.url}</p>} />
    </div>
  );
}

export default Footer;