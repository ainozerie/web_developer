import React, { useEffect, useState } from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import { useSelector } from 'react-redux';


export default function() {
  const location = useSelector(state => state.location)
  const [home, showHome] = useState(true)
  const [projects, showProjects] = useState(false)
  const [skills, showSkills] = useState(false)
  const [about, showAbout] = useState(false)
  
  useEffect(() => {
    showHome(location == 'home');
    showProjects(location == 'projects');
    showSkills(location == 'skills');
    showAbout(location == 'about me');
  })
  

  return (
        <div className='screen-container'>
          {home && <Home />}
          {projects && <Projects />}
          {skills && <Skills />}
          {about && <About />}
        </div>
    
  )
}
