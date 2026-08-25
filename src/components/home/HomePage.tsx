import React from 'react'
import HomeHero from './HomeHero'
import QuickStats from './QuickStats'
import Amenities from './Amenties'
import Services from './Services'
import Transformations from './Transformations'
import TrainerTeaser from './TrainerTeaser'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <QuickStats />
        <Amenities />
        <Services />
        <Transformations />
        <TrainerTeaser />
        <Testimonials />
        <CallToAction />
    </div>
  )
}

export default HomePage