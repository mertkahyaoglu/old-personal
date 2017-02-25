import React from 'react'

const SkillCard = ({name, image}) => {

  return (
    <div className="skill-wrapper">
      <img src={image} alt={name} />
    </div>
  )
}

export default SkillCard
