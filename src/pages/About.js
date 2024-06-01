import React from 'react';
import './About.css';

const About = () => {
  const resumeUrl = '/pdf/Career Resume_TaeJun Chang_301138621.pdf'; // 이력서 PDF 파일의 경로를 지정하세요

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/images/IMG_4283.JPG" alt="TaeJun" />
      <p>Hello, My name is TaeJun Chang. I'm a student of Centennial College</p>
      <p>I'm a junior front-end developer interested in web browser and front-end development.</p>
      <p>I've wandered a lot to see if this path is right, but I'm constantly trying to read lectures and related books</p>
      <p>to build up the basic concepts step by step.</p>
      <button onClick={handleDownloadResume}>Download My Resume</button>
    </div>
  );
};

export default About;