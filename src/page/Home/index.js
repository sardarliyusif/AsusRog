import React from 'react'
import {NavbarComponents , ExploreProducts , RecentStories , FooterComponents , RogInAction , JoinRepublic , Carousel} from '../../Components'



function Home() {
  return (
    <React.StrictMode>
    <NavbarComponents/>
    <Carousel/>
    <ExploreProducts/>
    <RecentStories/>
    <RogInAction/>
    <JoinRepublic/>
    <FooterComponents/>
    </React.StrictMode>
  )
}

export default Home