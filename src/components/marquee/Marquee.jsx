import React from 'react'
import marqueeimg from '../../assets/images/marqueeimg.png'

const Marquee = () => {
  return (
    <div>

<marquee behavior="" direction="">
  <img src={marqueeimg} className="pic" alt="..." />
</marquee>

    </div>
  )
}

export default Marquee