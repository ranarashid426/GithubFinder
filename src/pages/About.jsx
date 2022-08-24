import React from 'react'

function About() {
  return (
    <div>
      <div className="text-6xl mb-10 text-white">
        Github Finder
      </div>
        <p className="text-lg pb-3">
          A React App to Search Github profiles and see profile details. 
        </p>
        <p className='text-lg text-gray-400'>
          Version: <span className="text-white">1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          By : <span className="text-white">Rashid Bashir</span>
        </p>
    </div>
  )
}

export default About