import React from 'react';
import './Services.css';
import HtmlIcon from '../icons/HtmlIcon';
import CssIcon from '../icons/HtmlIcon';
import JsIcon from '../icons/JsIcon';
import ReactIcon from '../icons/ReactIcon';
import TypeIcon from '../icons/TypeIcon';

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>General Programming</h2>
          <p>I offer comprehensive programming services for various platforms.</p>
        </div>
        <div className="service-item">
          <h2>Web Development</h2>
          <p>My web development services include frontend and backend development.</p>
        </div>
        <div className="service-item">
          <h2>Mobile Apps</h2>
          <p>I create mobile applications for both iOS and Android platforms.</p>
        </div>
      </div>
      
      <main className="skills-experience">
        <h2>💻 Skills and Experience</h2>
        <div className="skill">
          <HtmlIcon /> 
          <h3>HTML & CSS</h3>
          <ul>
            <li>Adheres to cross-browser compatibility & semantic markup.</li>
            <li>Experience with responsive/adaptive development.</li>
            <li>Can use animation properties.</li>
            <li>Basic understanding of CSS.</li>
          </ul>
        </div>
        <div className="skill">
          <CssIcon />
          <h3>SCSS</h3>
          <ul>
            <li>Can modularize CSS into component form.</li>
            <li>Can use functions and conditionals.</li>
            <li>Develops mixins for extensibility and reusability.</li>
          </ul>
        </div>
        <div className="skill">
          <JsIcon />
          <h3>Javascript</h3>
          <ul>
            <li>Understands basic JavaScript syntax.</li>
            <li>Can create and use functions with arguments.</li>
            <li>Understands array and object syntax and methods.</li>
            <li>Experience developing toy projects using local storage.</li>
          </ul>
        </div>
        <div className="skill">
          <ReactIcon />
          <h3>React</h3>
          <ul>
            <li>Experience with React projects.</li>
            <li>Understands basic syntax.</li>
            <li>Experience developing SPAs using Router and conditional rendering of components.</li>
            <li>Experience binding local storage data to components.</li>
            <li>Can create functional components and pass props.</li>
            <li>Familiar with using libraries, e.g., moment.js.</li>
            <li>Can fetch data using both fetch and axios.</li>
            <li>Experience with responsive web development.</li>
          </ul>
        </div>
        <div className="skill">
          <TypeIcon />
          <h3>Typescript</h3>
          <ul>
            <li>Can define object types clearly using interfaces.</li>
            <li>Can create generics for components that work with multiple types.</li>
            <li>Can apply APIs from open source projects.</li>
            <li>Implemented dark mode in a personal TypeScript project.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Services;