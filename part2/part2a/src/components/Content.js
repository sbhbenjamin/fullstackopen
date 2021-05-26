import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const accumulator = (sum, currentValue) => sum + currentValue
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} info={part} />
      ))}
      <strong>
        total of {parts.map((part) => part.exercises).reduce(accumulator)}{' '}
        exercises
      </strong>
    </div>
  )
}

export default Content
