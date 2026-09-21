import React from 'react'

import profileImage from '../images/profile.jpg'


const About = () => {
  return (
    <div>
      <div className='home-container'>
        
        <div className='home-text'>

          <h1>Github Profile</h1>

          <p>
            view Github user profiles fetched
            dynamically using { " "}
            <strong>React Router v7 loaders</strong>. This demonstrates
            preloading data, smooth navigation, and professional UI design.

          </p>

          <p>
            Explore user information like username,
            bio, followers, and more in a clean layout.
          </p>

        </div>

        <div className='home-image'>

          <img src={profileImage} alt='Github illustration'/>
          
        </div> 

      </div>
      
    </div>

  );
}

export default About
