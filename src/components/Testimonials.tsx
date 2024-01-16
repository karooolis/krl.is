import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import kayProfile from '@/images/kay-profile.jpg'
import logoIndu from '@/images/logos/indu40.svg'
import logoPlaceholderNFT from '@/images/projects-logos/placeholder-nft.png'
import logoSmartContractsBuilder from '@/images/projects-logos/smart-contracts-builder.png'
import logoExplainoor from '@/images/projects-logos/explainoor.png'

import logoGraphql from '@/images/tech-logos/graphql.png'
import logoReact from '@/images/tech-logos/react.png'
import logoNextjs from '@/images/tech-logos/nextjs.svg'
import logoSolidity from '@/images/tech-logos/solidity.svg'
import logoJs from '@/images/tech-logos/js.png'
import logoTailwind from '@/images/tech-logos/tailwindcss.png'

const projects = [
  {
    name: 'PlaceholderNFT',
    description:
      'Unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction.',
    link: {
      href: 'https://www.placeholdernft.com/',
      label: 'placeholdernft.com',
    },
    logo: logoPlaceholderNFT,
  },
  {
    name: 'Smart Contracts Builder',
    description:
      'Build the most popular smart contracts in a few clicks. No coding required.',
    link: {
      href: 'https://www.smart-contracts-builder.com/',
      label: 'smart-contracts-builder.com',
    },
    logo: logoSmartContractsBuilder,
  },
  // {
  //   name: 'CoachGPT',
  //   description:
  //     'Real-time video streaming library, optimized for interstellar transmission.',
  //   link: { href: '#', label: 'github.com' },
  //   logo: logoHelioStream,
  // },
  {
    name: 'Explainoor',
    description:
      'Explainoor is an AI-powered VS Code plugin that reads your code and provides human-readable explanations.',
    link: { href: 'https://www.explainoor.xyz/', label: 'explainoor.xyz' },
    logo: logoExplainoor,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <SimpleLayout
    // title="Technology stack"
    // intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="bg-gray-900 py-12 sm:py-20 rounded-3xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16">
            <Image
              className="h-12 w-auto"
              src={logoIndu}
              alt="Indu4.0 logo"
            />

            <figure className="relative isolate pt-6">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute -top-16 right-2 -z-10 h-32 stroke-white/20"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>

              <blockquote className="text-xl font-medium leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  “We were very pleased with the work done for our marketplace
                  website. Karolis did a great job at understanding the
                  requirements and producing high-quality output. Thank you!”
                </p>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-5 text-base text-white">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={kayProfile}
                  alt=""
                />

                <div>
                  <div className="font-semibold">Kay Baur</div>
                  <div>CTO, indu4.0</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
