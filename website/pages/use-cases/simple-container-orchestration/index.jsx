import UseCasesLayout from 'layouts/use-cases'
import TextSplits from '@hashicorp/react-text-splits'
import FeaturedSliderSection from 'components/featured-slider-section'
// deps below are used in getStaticProps only
import RAW_CONTENT from './content.json'
import highlightData from '@hashicorp/nextjs-scripts/prism/highlight-data'

export async function getStaticProps() {
  const content = await highlightData(RAW_CONTENT)
  return { props: { content } }
}

export default function SimpleContainerOrchestrationPage({ content }) {
  return (
    <UseCasesLayout
      title="Simple Container Orchestration"
      description="Nomad runs as a single binary with a small resource footprint. Developers use a declarative job specification to define how an application should be deployed.  Nomad handles deployment and automatically recovers applications from failures."
    >
      <TextSplits textSplits={content.features} />
      <FeaturedSliderSection
        heading="Case Studies"
        features={[
          {
            logo: {
              url:
                'https://www.datocms-assets.com/2885/1582097215-roblox-white.svg',
              alt: 'Roblox',
            },
            image: {
              url:
                'https://www.datocms-assets.com/2885/1582096961-roblox-case-study.jpg',
              alt: 'Roblox Nomad Case Study',
            },
            heading: 'Roblox',
            content:
              'Scale a global gaming platform easily and reliably with Nomad to serve 100 million monthly active users',
            link: {
              text: 'Read Case Study',
              url: 'https://www.hashicorp.com/case-studies/roblox',
              type: 'outbound',
            },
          },
          {
            logo: {
              url:
                'https://www.datocms-assets.com/2885/1529339316-logocitadelwhite-knockout.svg',
              alt: 'Citadel',
            },
            image: {
              url:
                'https://www.datocms-assets.com/2885/1509052483-hashiconf2017-end-to-end-production-nomad-at-citadel.jpg',
              alt: 'Citadel Presentation',
            },
            heading: 'Citadel',
            content:
              'Optimize the cost efficiency of batch processing at scale with a hybrid, multi-cloud deployment with Nomad',
            link: {
              text: 'Learn More',
              url:
                'https://www.hashicorp.com/resources/end-to-end-production-nomad-citadel',
              type: 'outbound',
            },
          },
          {
            logo: {
              url:
                'https://www.datocms-assets.com/2885/1594247944-better-help-white.png',
              alt: 'BetterHelp',
            },
            image: {
              url:
                'https://www.datocms-assets.com/2885/1594247996-betterhelp-case-study-screen.png',
              alt: 'BetterHelp Presentation',
            },
            heading: 'BetterHelp',
            content:
              'From 6 dedicated servers in a colocation facility to a cloud-based deployment workflow with Nomad',
            link: {
              text: 'Learn More',
              url:
                'https://www.hashicorp.com/resources/betterhelp-s-hashicorp-nomad-use-case/',
              type: 'outbound',
            },
          },
        ]}
      />
    </UseCasesLayout>
  )
}
