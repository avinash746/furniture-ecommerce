import { TextParallaxContentExample } from '@/components/Annimations'
import { Card } from '@/components/Card'
import CategoriesOfFlowers from '@/components/CategoryOfFlowers'
import CategoriesOfFurniture from '@/components/CategoryOfFurniture'
import ContentSection from '@/components/ContentSection'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { HomeContact } from '@/components/HomeContact'
import Project from '@/components/Project'
import { Section } from '@/components/Section'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <Section/>
    <CategoriesOfFurniture/>
    <Project/>
    <Grid/>
    <TextParallaxContentExample/>
    <ContentSection/>
    <HomeContact/>
    </>
  )
}

export default Home