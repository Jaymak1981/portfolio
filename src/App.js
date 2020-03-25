import React from 'react';
// import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <About /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
