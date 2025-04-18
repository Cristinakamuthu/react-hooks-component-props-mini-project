import React from 'react'
import App from './App'

const About = ({image, about}) => {
    
    const images = !image ? "https://via.placeholder.com/215" : image

  return (
 <aside>
        <img src={images} alt="blog logo" />
        <p>{about}</p>
</aside>
  )
}

export default About