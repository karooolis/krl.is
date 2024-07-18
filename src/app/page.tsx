import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from '@/components/SocialIcons'

import Companies from '@/components/Companies'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import { getAllArticles } from '@/lib/articles'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Do you need a <span>full-stack</span> developer?
            {/* Product-minded software engineer */}
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            My name is Karolis Ramanauskas 👋 I'm a full-stack software engineer
            who enjoys building products. I'm always on the lookout for more
            efficient ways to ship reliable software. I mainly work
            with React, Next.js, TypeScript, Node.js, GraphQL and Solidity.
          </p>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            If you'd like to get in touch with me{' '}
            <a
              href="mailto:hi@krl.is"
              className="font-medium text-lime-500 underline decoration-lime-500"
            >
              email
            </a>{' '}
            and{' '}
            <a
              href="https://twitter.com/karooolis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-lime-500 underline decoration-lime-500"
            >
              twitter
            </a>{' '}
            are your best channels.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/karooolis"
              target="_blank"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/karooolis"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/karolisram"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink href="mailto:hi@krl.is" icon={MailIcon} />
          </div>
        </div>
      </Container>

      <Photos />
      <Companies />
      <Projects />
      <Testimonials />
      <TechStack />
      <Contact />
    </>
  )
}
