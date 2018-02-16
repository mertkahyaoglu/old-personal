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
        src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
      />
    </a>
  </div>
);

export default Home;
