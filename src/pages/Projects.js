import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Company Project",
      description: (
        <>
          <p>A project that participated as FE in edutech company named ohchilpalgu</p>
          <p>Create an upgraded version of the site called Weeks52 that provides useful lectures for job seekers</p>
          <p>Create key page and components features</p>
          <p>Deploy to check the site, and participate in pre-deployment QA work</p>
        </>
      ),
      imageUrl: `${process.env.PUBLIC_URL}/images/Weeks52 project.jpg`
    },
    { title: "Personal Portfolio",
    description: (
      <>
        <p>A portfolio that allows developers to view introductions, personal works, blogs, and more based on the familiar vscode design</p>
        <p>Additionally, enable sending mail within the portfolio</p>
        <p>A web page created over a long period of time</p>
        <p>Easy responsive operation with css.module, code SVG icon to use</p>
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/images/PortFolio Project.jpg`
   },
    { title: "Team Project",
    description: (
      <>
        <p>Clone accommodation reservation web page created by a total of 5 people through bootcamp in Korea</p>
        <p>Create a custom calendar using the main page Navbar feature implementation and moment library</p>
        <p>Implementation of background scrolling prevention function in modal window pop-up and alerting window floating function that requires login if you try to pay in a non-login state</p>
        <p>(Backend Part) Sign-in and membership API implementation</p>
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/images/Team Project.png`
   },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.imageUrl} alt={project.title} />
          <h2>{project.title}</h2>
          <div className="project-description">{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;