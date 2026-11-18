import React from 'react'
import Hero from './components/home/Hero'
import CategorySection from './components/home/CategorySection'
import FoodMenuSection from './components/home/FoodMenuSection'
import WhyChooseSection from './components/home/WhyChooseSection'
import SpecialOffersSection from './components/home/SpecialOffersSection'
import PopularProductsSection from './components/home/PopularProductsSection'
import TestimonialSection from './components/home/TestimonialSection'
import NewsletterSection from './components/home/NewsletterSection'

const page = () => {
  return (
    <div>
      <Hero />
      <CategorySection/>
      <FoodMenuSection/>
      <WhyChooseSection/>
      <SpecialOffersSection/>
      <PopularProductsSection/>
      <TestimonialSection/>
      <NewsletterSection/>

    </div>
  )
}

export default page
