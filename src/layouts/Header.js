import React from 'react';
import '../styles/Header.css';
import { Route, Switch } from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';
import img6 from '../images/header6.jpg';
import img7 from '../images/header7.jpg';
import error from '../images/error.jpg';

const imgArray = [img1, img2, img3, img4, img5, img6, img7]

const Header = () => {
  const RandomPicture = () => imgArray[Math.floor(Math.random() * imgArray.length)];

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route path='/products' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route path='/product/:id' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route path='/contact' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route path='/admin' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route path='/login' render={() => <img src={RandomPicture()} alt="city" />} />
        <Route render={() => <img src={error} alt="city" />} />
      </Switch>
    </>
  );
}

export default Header;