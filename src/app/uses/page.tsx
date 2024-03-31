import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1, 16GB RAM (2021)">
            Perfect balance of portability and power. While sometimes I wish for
            a bigger screen, I love how light and portable this laptop is so I
            can bring it everywhere.
          </Tool>

          {/* <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool> */}

          <Tool title="Apple Magic Keyboard & Mouse">
            Although the keyboard and mouse are very unergonomic, I still enjoy
            working with them. However, looking to upgrade to a more
            ergonomic keyboard and mouse in the future.
          </Tool>

          {/* <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool> */}
        </ToolsSection>

        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            Have been using VS Code for years. Love its extensive plugins
            ecosystem, and customizability.
          </Tool>

          <Tool title="iTerm2">
            Not sure how I ever lived without split panes.
          </Tool>

          <Tool title="GitHub Copilot">
            Use it daily for code-completions, and it's been a huge time-saver.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Design">
          <Tool title="Figma">
            While I'm not a designer, I still often use Figma to create
            prototypes, design my own projects, or gather design inspiration.
          </Tool>

          <Tool title="Pixelmator">
            Simpler to use than Photoshop, and has all the features I need.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity">
          {/* <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool> */}

          {/* <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool> */}

          <Tool title="Obsidian">
            Note-taking app that uses Markdown files stored on disk. I've been
            using it to structure my notes, projects, organize my life, and
            everything in-between.
          </Tool>

          <Tool title="SelfControl">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>

          <Tool title="Rize">
            Time tracking tool I use to get a glimpse of my productivity levels,
            and better understand how I spend my time on PC.
          </Tool>

          <Tool title="Arc">
            My new go-to browser. Love using the full-screen more, separated
            profiles, and many other small but nice improvements and details.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
