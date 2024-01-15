import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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
      title="Technology Stack"
      // intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoJs} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>JS / TS</p>
        </li>

        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoReact} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>React</p>
        </li>

        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoNextjs} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>Next.js</p>
        </li>

        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoTailwind} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>Tailwind CSS</p>
        </li>

        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoGraphql} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>GraphQL</p>
        </li>

        <li className="flex items-center gap-3">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logoSolidity} alt="" className="h-8 w-8" unoptimized />
          </div>
          <p>Solidity</p>
        </li>

        {/* {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))} */}
      </ul>
    </SimpleLayout>
  )
}
