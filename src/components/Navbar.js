import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function Navbar() {
  return (
    <>
      <div className="nav">
        <ul className="linksList">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <HomeIcon className="navIcon" />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <AssignmentIndIcon className="navIcon" />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <AssignmentIcon className="navIcon" />
              <p>Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactMe"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <ContactPageRoundedIcon className="navIcon" />
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navbar;
