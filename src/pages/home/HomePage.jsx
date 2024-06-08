
import React from 'react'
import Slider from '../../components/slider/Slider'
import AboutComponent from '../../components/about/AboutComponent'
import Marquee from '../../components/marquee/Marquee'
import Seminars from '../../components/seminars/Seminars'

const HomePage = () => {
  return (
    <div>
      <Slider />
      <AboutComponent/>
      <Marquee/>
      <Seminars/>


    </div>
  )
}

export default HomePage