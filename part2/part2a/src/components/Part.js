import React from 'react'

const Part = ({ info }) => {
  return (
    <div>
      <p>
        {info.name} {info.exercises}
      </p>
    </div>
  )
}

export default Part
