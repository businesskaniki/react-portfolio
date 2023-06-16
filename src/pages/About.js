/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Modal from 'react-modal';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/about.scss';
import TechStack from '../components/TechStack';

function About() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="aboutMe animate">
      <div className="aboutMeContent">
        <h1>About Me</h1>
        <ul>
          <li>
            <p>
              I am currently a pationate Frontend Developer, with a keen eye for detail and love for creativity.
            </p>
          </li>
          <li>
            <p>
              I am always working to improve my knowledge base as well as try out new tech to add to my already expansive knowledge. My top three technologies are:
            </p>
          </li>
          <li>
            <p>
              - React JS
              <br />
              - TypeScript
              <br />
              - SCSS
              <br />
            </p>
          </li>
          <li>
            <p>
              With these, I can build anything my heart wishes. Beyond these, I am a quick learner and can pick up anything in a short time.
            </p>
          </li>
          <li>
            <p>
              I am currently looking for my next role and would be interested in any kind of work.
            </p>
          </li>
        </ul>
      </div>
      <button type="button" onClick={openModal}>
        <HorizontalSplitIcon />
      </button>
      <p>Tech Stack</p>
      <Modal
        className="modal animate"
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={closeModal}>
          <CloseIcon />
        </button>
        <TechStack />
      </Modal>
    </div>
  );
}

export default About;
