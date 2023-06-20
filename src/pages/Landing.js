/* eslint-disable max-len */
import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { particlesConfig as particlesOptions } from '../config/configParticles'
import '../styles/landing.scss'

function Landing () {
  const particlesInit = useCallback((main) => {
    loadFull(main)
  }, [])

  return (
    <div className="landing animate">
      <Particles options={particlesOptions} init={particlesInit} />
      <div className="content">
        <p>Hi, my name is</p>
        <h1>Nicholas</h1>
        <h6>I’m a software developer! I can help you build a product, feature or website. You may look through some of my work and experience! If you like what you see and have a project you need coded, contact me.</h6>
        <NavLink to="/projects">
          <button type="button">See Projects</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Landing
