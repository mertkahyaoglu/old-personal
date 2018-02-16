import React from 'react';

const img_github = 'images/github.svg';
const img_android = 'images/android.svg';

const Tag = ({ color, tag }) => (
  <li style={{ backgroundColor: tag.color }}>{tag.name}</li>
);

const Github = ({ githubLink }) => (
  <li>
    <a target="_blank" href={githubLink}>
      <img src={img_github} alt="github/mertkahyaoglu" />
    </a>
  </li>
);

const Android = ({ playLink }) => (
  <li>
    <a target="_blank" href={playLink}>
      <img src={img_android} alt="google play" />
    </a>
  </li>
);

const ProjectCard = ({ project }) => (
  <div className="project-wrapper">
    <div className="project">
      <a target="_blank" href={project.link}>
        <img src={project.image} alt="Mert Kahyaoğlu" />
      </a>
      <div className="description">
        <h3>
          <a target="_blank" href={project.link}>
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
        <hr />
        <ul className="tags">
          {project.tags.map((tag, i) => <Tag tag={tag} key={i} />)}
        </ul>
        <ul className="links">
          {project.github && <Github githubLink={project.github} />}
          {project.android && <Android playLink={project.android} />}
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectCard;
