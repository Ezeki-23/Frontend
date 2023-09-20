import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export function WritEffect () {
  return (
    <div className='writterEffect'>
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Laureano.', 'Pr. FullStack Junior.']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}
