import React from 'react'

import SocialMenu from './SocialMenu'

const Profile = ({profile}) => (
  <div className="profile">
    <h1>{profile.name}</h1>
    <h2>{profile.title}</h2>
    <p>{profile.bio}</p>
    <SocialMenu links={profile.links} />
  </div>
)

export default Profile
