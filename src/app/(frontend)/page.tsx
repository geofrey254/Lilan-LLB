import { getPayload } from 'payload'
import React from 'react'
import HeroBlock from './components/homepage/HeroBlock'
import LandingAbout from './components/homepage/LandingAbout'
import ServicesSection from './components/homepage/Services'
import TeamSection from './components/homepage/TeamBlock'
import WhyBlock from './components/homepage/WhyBlock'
import CTABlock from './components/homepage/CTABlock'

import config from '@/payload.config'
import './globals.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <div>
      <div className="page">{page.layout?.map((block, index) => renderBlock(block, index))}</div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={index} block={block} />
    case 'home-about':
      return <LandingAbout key={index} block={block} />
    case 'our-team':
      return <TeamSection key={index} block={block} />
    case 'services-block':
      return <ServicesSection key={index} block={block} />
    case 'why-choose-us':
      return <WhyBlock key={index} block={block} />
    case 'cta-section':
      return <CTABlock key={index} block={block} />
    default:
      return null
  }
}
