import { motion } from "motion/react"
import { ArrowUpRight, BookOpen, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const tracks = [
  { icon: Code2, title: "Software development", detail: "Build practical digital products." },
  { icon: BookOpen, title: "Career-ready learning", detail: "Turn new skills into real opportunities." },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a className="flex items-center gap-3" href="#home" aria-label="Pan African Skill Development Centre home">
          <span className="grid size-10 place-items-center rounded-full bg-[#173f35] text-[#f6d66b]">
            <Sparkles size={19} aria-hidden="true" />
          </span>
          <span className="max-w-40 text-sm font-semibold leading-tight text-[#173f35]">Pan African Skill Development Centre</span>
        </a>
        <a className="hidden items-center gap-2 text-sm font-semibold text-[#173f35] sm:flex" href="mailto:hello@pasdc.org">
          Get in touch <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section id="home" className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 pb-16 pt-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#a55032]">
            <span className="h-px w-8 bg-[#a55032]" /> Skills for what comes next
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.04] text-[#173f35] sm:text-6xl lg:text-7xl">
            Learn boldly. <span className="text-[#a55032]">Build</span> what matters.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#53635b]">
            Practical digital skills and pathways for people shaping Africa’s future.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild>
              <a href="mailto:hello@pasdc.org">Explore learning <ArrowUpRight size={17} aria-hidden="true" /></a>
            </Button>
            <span className="text-sm text-[#65736c]">Learn by doing, grow by sharing.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-[0.95] overflow-hidden rounded-[2px] bg-[#d6e0cb] p-7 sm:p-10">
            <div className="absolute -right-12 -top-10 size-56 rounded-full border-[32px] border-[#e9bd53]" />
            <div className="absolute -bottom-24 -left-10 size-64 rounded-full bg-[#a55032]" />
            <div className="absolute inset-x-7 top-7 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-[#173f35] sm:inset-x-10 sm:top-10">
              <span>Curiosity into capability</span><span>01 / 02</span>
            </div>
            <div className="absolute inset-x-7 bottom-7 space-y-3 sm:inset-x-10 sm:bottom-10">
              {tracks.map(({ icon: Icon, title, detail }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.12 }}
                  className="relative flex items-center gap-4 border border-[#173f35]/15 bg-[#f5f3ec]/90 p-4 backdrop-blur-sm sm:p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center bg-[#173f35] text-[#f6d66b]"><Icon size={20} aria-hidden="true" /></span>
                  <span><span className="block font-semibold text-[#173f35]">{title}</span><span className="mt-1 block text-sm leading-snug text-[#65736c]">{detail}</span></span>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default App