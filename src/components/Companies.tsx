import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlaceholderNFT from '@/images/projects-logos/placeholder-nft.png'
import logoSmartContractsBuilder from '@/images/projects-logos/smart-contracts-builder.png'
import logoExplainoor from '@/images/projects-logos/explainoor.png'

import logoUber from '@/images/logos/uber.svg'
import logoVolvo from '@/images/logos/volvo-cars.png'
import logoNielsen from '@/images/logos/nielsen.png'
import logoToptal from '@/images/logos/toptal.png'
import logoBT from '@/images/logos/bt.svg'
import logoMacro from '@/images/logos/macro-small.png'

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

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Companies I’ve worked with.',
}

export default function Projects() {
  return (
    <SimpleLayout
      // title="Companies I’ve worked with."
      title="You’ll be in good company"
      intro="I’ve worked with small and large organisations, along with freelance projects."
    >
      <ul
        role="list"
        className="grid grid-cols-3 gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-6"
      >
        <li>
          <Image
            src={logoVolvo}
            alt=""
            className="h-16 w-16 dark:invert"
            unoptimized
          />
        </li>

        <li>
          <Image
            src={logoUber}
            alt=""
            className="h-16 w-16 dark:invert"
            unoptimized
          />
        </li>

        <li>
          <Image
            src={logoNielsen}
            alt=""
            className="h-16 w-16"
            unoptimized
          />
        </li>

        <li>
          <Image
            src={logoToptal}
            alt=""
            className="h-16 w-16"
            unoptimized
          />
        </li>

        <li>
          <Image
            src={logoBT}
            alt=""
            className="h-16 w-16"
            unoptimized
          />
        </li>

        <li>
          <Image
            src={logoMacro}
            alt=""
            className="h-16 w-16"
            unoptimized
          />
        </li>
      </ul>

      {/* <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
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
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-lime-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul> */}
    </SimpleLayout>
  )
}
