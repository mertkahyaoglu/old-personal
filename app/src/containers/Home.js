import React, { Component } from 'react'
import Waypoint from 'react-waypoint';

import Profile from '../components/Profile'
import NavMenu from '../components/NavMenu'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

import profile from '../../data/profile'
import projects from '../../data/projects'
import skills from '../../data/skills'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      show_menu: false
    }

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
  }

  handleWaypointEnter() {
    this.setState({show_menu: false})
  }

  handleWaypointLeave() {
    this.setState({show_menu: true})
  }

  render() {
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

        <Waypoint
          topOffset={10}
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave} />

        <main>

          <section className="skills" id="skills">
            <div className="container">
              <h3 id="skills" className="title">{"< Skills />"}</h3>
              <div className="skills">
                <div className="skills-wrapper">
                  <h4>Languages</h4>
                  <div>
                    {
                      skills.languages.map(
                        (skill, i) => <SkillCard key={i} name={skill.name} image={skill.image} />
                      )
                    }
                  </div>
                </div>
                <div className="skills-wrapper">
                  <h4>Technologies & Frameworks</h4>
                  <div>
                  {
                    skills.technologies.map(
                      (skill, i) => <SkillCard key={i} name={skill.name} image={skill.image} />
                    )
                  }
                  </div>
                </div>
                <div className="skills-wrapper">
                  <h4>Storage</h4>
                  <div>
                  {
                    skills.storage.map(
                      (skill, i) => <SkillCard key={i} name={skill.name} image={skill.image} />
                    )
                  }
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="portfolio" id="portfolio">
            <div className="container">
              <h3 id="portfolio" className="title">{"< Portfolio />"}</h3>
              <div className="portfolio-wrapper">
                {
                  projects.map((project, i) =>
                    <ProjectCard key={i} project={project} />)
                }
              </div>
            </div>
          </section>

        </main>

        {
          this.state.show_menu &&
            <div className="sticky-menu">
              <NavMenu />
            </div>
        }

        <a href="https://github.com/mertkahyaoglu/mertkahyaoglu.github.io">
          <img className="github-ribbon" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" />
        </a>

      </div>
    )
  }
}

export default Home
