import React from 'react';

import Profile from '../components/Profile';
import NavMenu from '../components/NavMenu';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import SocialMenu from '../components/SocialMenu';

import profile from '../data/profile';
import projects from '../data/projects';
import skills from '../data/skills';

const Home = () => (
  <div className="content">
    <section id="about" className="about">
      <div className="container">
        <Profile profile={profile} />
        <SocialMenu links={profile.links} />
      </div>
    </section>

    <main>
      <section className="skills" id="skills">
        <div className="container">
          <h3 id="skills" className="title">
            {'< Skills />'}
          </h3>
          <div className="skills">
            <div className="skills-wrapper">
              <h4>Languages</h4>
              <div>
                {skills.languages.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} image={skill.image} />
                ))}
              </div>
            </div>
            <div className="skills-wrapper">
              <h4>Technologies & Frameworks</h4>
              <div>
                {skills.technologies.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} image={skill.image} />
                ))}
              </div>
            </div>
            <div className="skills-wrapper">
              <h4>Storage</h4>
              <div>
                {skills.storage.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} image={skill.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h3 id="portfolio" className="title">
            {'< Portfolio />'}
          </h3>
          <div className="portfolio-wrapper">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>

    <div className="sticky-menu">
      <NavMenu />
    </div>

    <a
      className="forkme"
      href="https://github.com/mertkahyaoglu/mertkahyaoglu.github.io"
    >
      <img
        className="github-ribbon"
        src="images/fork.png"
        alt="Fork me on GitHub"
      />
    </a>
  </div>
);

export default Home;
