import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/MensKurta'
import Footer from '../../components/footer/Footer'

function HomePage() {
  return (
    <div>
        <MainCarosel className="mt-15"/>
        <div className='space-y-15 py-20 flex flex-col justify-center px-10 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"women's Saree"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage