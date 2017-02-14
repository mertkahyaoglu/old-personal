import React from 'react'

const img_github = 'images/github.svg'
const img_twitter = 'images/twitter.svg'
const img_linkedin = 'images/linkedin.svg'
const img_mail = 'images/mail.svg'

const SocialMenu = ({links}) => (
  <ul className="social_menu">
    <li><a target="_blank" href={links.github}><img src={img_github} alt="Mert Kahyaoğlu"/></a></li>
    <li><a target="_blank" href={links.twitter}><img src={img_twitter} alt="Mert Kahyaoğlu"/></a></li>
    <li><a target="_blank" href={links.linkedin}><img src={img_linkedin} alt="Mert Kahyaoğlu"/></a></li>
    <li><a target="_blank" href={links.mail}><img src={img_mail} alt="Mert Kahyaoğlu"/></a></li>
  </ul>
)

export default SocialMenu
