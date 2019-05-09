import React from 'react';

const img_github = 'images/github.svg';
const img_twitter = 'images/twitter.svg';
const img_linkedin = 'images/linkedin.svg';
const img_mail = 'images/mail.svg';

const SocialMenu = ({ links }) => (
  <div className="social_menu">
    <div>
      <a target="_blank" href={links.github} rel="noopener">
        <img src={img_github} alt="Mert Kahyaoğlu" />
      </a>
    </div>
    <div>
      <a target="_blank" href={links.twitter} rel="noopener">
        <img src={img_twitter} alt="Mert Kahyaoğlu" />
      </a>
    </div>
    <div>
      <a target="_blank" href={links.linkedin} rel="noopener">
        <img src={img_linkedin} alt="Mert Kahyaoğlu" />
      </a>
    </div>
    <div>
      <a target="_blank" href={links.mail} rel="noopener">
        <img src={img_mail} alt="Mert Kahyaoğlu" />
      </a>
    </div>
  </div>
);

export default SocialMenu;
