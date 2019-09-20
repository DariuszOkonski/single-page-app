import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header className="header">
          {<Header />}
        </header>

        <main className="main">

          <aside className="aside">
            {<Navigation />}
          </aside>

          <section className="page">
            {<Page />}
          </section>

        </main>

        <footer className="footer">
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
