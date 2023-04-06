"use client"
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Statistics from '@/components/Statistics'
import Pricing from '@/components/Pricing'
import Carousel from '@/components/Crousel'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Carousel/>
      <HeroSection/>
      <Features/>
      <Statistics/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
    </>
  )
}
