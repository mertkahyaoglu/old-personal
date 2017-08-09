import React from 'react'

const Profile = ({profile}) => (
  <div className="profile">
    <h1>{profile.name}</h1>
    <h2>{profile.title}</h2>
    <div dangerouslySetInnerHTML={profile.bio} />
  </div>
)

export default Profile
