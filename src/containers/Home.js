import React, { Component } from 'react'

import Profile from '../components/Profile'
import NavMenu from '../components/NavMenu'
import ProjectCard from '../components/ProjectCard'

import profile from '../../data/profile'
import projects from '../../data/projects'

class Home extends Component {
  render() {
    const cards = projects.map((project, i) => <ProjectCard key={i} project={project} />)

    return (
      <div className="content">
        <section id="about" className="about">
          <div className="left-half">
            <nav>
              <NavMenu />
            </nav>
          </div>
          <div className="right-half">
            <div className="banner">
              <NavMenu />
            </div>
            <div className="center">
              <Profile profile={profile} />
            </div>
          </div>
        </section>

        <section className="portfolio">
          <div className="container">
            <h3 id="portfolio" className="title">{"< Portfolio />"}</h3>
            <div className="portfolio-wrapper">
              {cards}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
