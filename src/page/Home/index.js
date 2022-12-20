import React from 'react'
import NavbarComponents from '../../Components/NavbarComponents'
import ExploreProducts from '../../Components/HomeComponents/ExploreProducts'
import RecentStories from '../../Components/HomeComponents/RecentStories'
import SlickSlider from '../../Components/HomeComponents/SlickSlider'
import FooterComponents from '../../Components/FooterComponents'
import RogInAction from '../../Components/HomeComponents/RogInAction'
import JoinRepublic from '../../Components/HomeComponents/JoinRepublic'

function Home() {
  return (
    <React.StrictMode>
    <NavbarComponents/>
    <SlickSlider/>
    <ExploreProducts/>
    <RecentStories/>
    <RogInAction/>
    <JoinRepublic/>
    <FooterComponents/>
    </React.StrictMode>
  )
}

export default Home