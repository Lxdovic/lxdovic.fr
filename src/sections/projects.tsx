'use client'

import PixelCard from '@/components/ui/pixel-card'
import { Plus } from 'lucide-react'
import React, { useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import scrollTrigger from 'gsap/ScrollTrigger'
import ScrollFloat from '@/components/ui/scroll-float'

gsap.registerPlugin(useGSAP, scrollTrigger)

export const Projects = () => {
  return (
    <section className="min-h-screen z-10 bg-background py-20" id="projects">
      <div className="container mx-auto overflow-hidden">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="mx-auto w-max overflow-visible"
          textClassName="text-4xl mx-auto sm:text-7xl md:text-8xl lg:text-9xl h-14 sm:h-24 md:h-32 lg:h-48 mb-10 tracking-tighter font-serif italic"
        >
          Projects
        </ScrollFloat>
      </div>
      <div className="w-full border-y">
        <div className="container mx-auto flex px-4 flex-wrap gap-[1px]">
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Chess Analysis Tool</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                A Chess Analysis tool allowing users to import games from popular chess websites and
                Request an analysis using a chess engine such as Stockfish. It has features like
                move classification, Interpretation of piece roles, Evaluation graph, Lichess games
                database and more.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Search Engine</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                A Full-Text Search engine written from scratch using algorithms such as Levenshtein
                Distance and Jaro-Winkler Distance. With data structures such as Inverted Indexes
                and BK-Trees
              </p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Chess Engine</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                A complete chess engine written from scratch with no dependency. It implements the
                UCI protocol to allow plugging it into any chess GUI software. Using many
                interesting algorithms such as Negamax, Alpha-Beta Pruning, Zobrist Hashing, Magic
                Bitboards and more.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Neural Network</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                A school project I decided to take too seriously and implemented Perceptrons and
                Multi-Layer Perceptrons instead of using common frameworks.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Chess Challenge</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                My participation to a Chess Coding Challenge hosted by Sebastian Lague. It was about
                programming a chess bot with a maximum of 1024 tokens. I ended up 64th out of 600+
                participants.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-4 group size-full">
              <h2 className="uppercase text-xl">Programming Language</h2>

              <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition translate-y-[1rem] group-hover:translate-y-[0]">
                A custom programming language written from scratch by following Immo Landwidths
                series on how to build a compiler. It features a REPL, an Interpreter and a Compiler
              </p>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <PixelCard
      gap={6}
      noFocus
      variant="pink"
      className="!w-96 rounded-none border-0 ring-1 flex-grow ring-border overflow-visible"
    >
      <Plus
        width={20}
        className="absolute top-0 left-0 -translate-x-[calc(50%+1px)] -translate-y-[calc(50%+1px)] text-zinc-700"
      />
      <Plus
        width={20}
        className="absolute top-full left-0 -translate-x-[calc(50%+1px)] -translate-y-[calc(50%-1px)] text-zinc-700"
      />
      <Plus
        width={20}
        className="absolute top-0 left-full -translate-x-[calc(50%-1px)] -translate-y-[calc(50%+1px)] text-zinc-700"
      />
      <Plus
        width={20}
        className="absolute top-full left-full -translate-x-[calc(50%-1px)] -translate-y-[calc(50%-1px)] text-zinc-700"
      />
      <div
        className="absolute inset-0 size-full p-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-transparent"
        {...props}
      >
        {children}
      </div>
    </PixelCard>
  )
}
