import React, { Component } from 'react'

import Profile from '../components/Profile'
import NavMenu from '../components/NavMenu'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

import profile from '../../data/profile'
import projects from '../../data/projects'
import skills from '../../data/skills'

class Home extends Component {
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
      </div>
    )
  }
}

export default Home
