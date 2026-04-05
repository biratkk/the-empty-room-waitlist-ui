"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useInView } from "@/hooks/use-in-view"

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.08, once: true })

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} transition-all duration-[1000ms] ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </section>
  )
}

function EmailCapture({
  buttonText = "Claim my spot",
}: {
  buttonText?: string
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        placeholder="Your email"
        required
        className="h-11 flex-1 rounded-md border-border bg-white/60 px-4 text-base tracking-wide placeholder:text-muted-foreground/60"
      />
      <Button
        type="submit"
        className="h-11 rounded-md bg-foreground px-6 text-sm tracking-widest text-background uppercase transition-all duration-300 hover:bg-foreground/85"
      >
        {buttonText}
      </Button>
    </form>
  )
}

function ScienceSubsection({
  title,
  body,
  pullQuote,
  pullCite,
  stats,
  bgClass = "bg-background",
  id,
}: {
  title: string
  body: React.ReactNode
  pullQuote: string
  pullCite: string
  stats?: { stat: string; body: string; cite: string }[]
  bgClass?: string
  id?: string
}) {
  return (
    <div id={id} className={`${bgClass} flex min-h-screen flex-col justify-center px-6 py-20 md:py-28`}>
      <div className="mx-auto max-w-5xl">
        <h3 className="max-w-2xl font-serif text-[clamp(1.3rem,2.5vw,1.75rem)] leading-snug tracking-tight">
          {title}
        </h3>

        <div className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {body}
        </div>

        <blockquote className="my-16 border-l-2 border-accent py-2 pl-8 md:pl-12">
          <p className="max-w-2xl font-serif text-lg leading-relaxed italic md:text-xl lg:text-2xl">
            {pullQuote}
          </p>
          <cite className="mt-4 block text-sm not-italic tracking-wide text-muted-foreground">
            {pullCite}
          </cite>
        </blockquote>

        {stats && stats.length > 0 && <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {stats.map(({ stat, body: statBody, cite }) => (
            <div
              key={stat}
              className="flex flex-col justify-between bg-background p-7 md:p-9"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-accent">{stat}</span>{" "}
                {statBody}
              </p>
              <p className="mt-5 text-[11px] italic text-muted-foreground/50">
                {cite}
              </p>
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default function Page() {
  const [citationsOpen, setCitationsOpen] = useState(false)
  const [researchOpen, setResearchOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* ─── HERO ─── */}
      <Section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <div className="flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <p className="mb-8 text-sm tracking-[0.35em] text-muted-foreground uppercase">
            London &middot; Opening Soon
          </p>

          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.1] tracking-tight">
            A room.
            <br />
            A chair.
            <br />
            Thirty minutes.
            <br />
            Nothing else.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The Empty Room is a network of pre-bookable quiet rooms across
            London. No phone. No demands. No performance. A comfortable chair
            and a door that closes.
          </p>

          <div className="mt-12 flex w-full flex-col items-center gap-4">
            <p className="text-sm font-medium tracking-wide">
              Join the waitlist &mdash; first session &pound;3
            </p>
            <EmailCapture />
            <p className="mt-2 text-xs tracking-wide text-muted-foreground/70">
              No spam. Just an email when we open.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center gap-1 text-muted-foreground/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="animate-bounce"
            style={{ animationDuration: "2.5s" }}
          >
            <path
              d="M8 4v12m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Section>

      {/* ─── TENSION ─── */}
      <Section className="px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] leading-snug tracking-tight">
              You are online for approximately 6 hours a day.
              <span className="mt-2 block">
                Your attention is interrupted every 47 seconds.
              </span>
              <span className="mt-2 block">
                You haven&rsquo;t sat in silence for more than 3 minutes this
                week.
              </span>
            </h2>

            <p className="mt-5 text-sm italic text-muted-foreground">
              (These are averages. Yours may be worse.)
            </p>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Somewhere in the last decade, doing nothing became structurally
                impossible. The phone in your pocket has been engineered, at
                considerable expense, to ensure you never just sit there. Every
                gap gets filled. Every pause gets a notification. The industry
                that profits from your attention has had a twenty-year head start
                on the part of your brain that wants to be left alone.
              </p>
              <p>
                The Empty Room is a correction. A plain, quiet room where
                nothing is asking you for anything.
              </p>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg bg-secondary">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-muted-foreground/30">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-xs tracking-[0.2em] uppercase">
                  Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── WHAT IT IS ─── */}
      <Section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight">
              Exactly what it sounds like.
            </h2>

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Quiet rooms across London. Warm grey walls, good light, a chair
                that doesn&rsquo;t fight you. No music. No instructions. No
                agenda.
              </p>
              <p>
                You book through the app. You arrive. You sit. You leave when
                your time is up.
              </p>
              <p className="font-medium text-foreground">
                That&rsquo;s the whole thing.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {[
              { label: "Session length", value: "30 minutes" },
              { label: "Booking", value: "App only. Pre-book required." },
              { label: "First session", value: "\u00A33" },
              { label: "Drop-in", value: "\u00A36\u2013\u00A38" },
              {
                label: "Membership",
                value: "\u00A320/month \u00B7 8 sessions",
              },
              { label: "Location", value: "London \u00B7 Multiple sites \u00B7 TBC" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 bg-background p-6 md:p-8"
              >
                <span className="text-xs tracking-[0.2em] text-muted-foreground/70 uppercase">
                  {label}
                </span>
                <span className="text-sm font-medium leading-snug md:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── THE SCIENCE ─── */}
      <Section className="bg-secondary px-6 py-28 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
            The research
          </p>
          <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight">
            The brain doesn&rsquo;t idle. It was just waiting for the room.
          </h2>
          <Button
            variant="ghost"
            onClick={() => {
              setResearchOpen((prev) => {
                const next = !prev
                if (next) {
                  setTimeout(() => {
                    document
                      .getElementById("research-subsection-1")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }, 50)
                }
                return next
              })
            }}
            className="mt-8 border border-border px-6 text-sm tracking-wide"
          >
            {researchOpen ? "Hide the research" : "See the research"}
          </Button>
        </div>
      </Section>

      {researchOpen && (<>
      {/* Fixed hide button */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <Button
          variant="outline"
          onClick={() => {
            const target = document.getElementById("differentiator")
            if (!target) return
            target.scrollIntoView({ behavior: "smooth" })
            const onEnd = () => {
              window.removeEventListener("scrollend", onEnd)
              setResearchOpen(false)
            }
            window.addEventListener("scrollend", onEnd, { once: true })
          }}
          className="pointer-events-auto rounded-full border-border bg-background/90 px-6 text-sm tracking-wide shadow-lg backdrop-blur-sm"
        >
          Hide research
        </Button>
      </div>

      {/* Science Subsection 1 */}
      <ScienceSubsection
        bgClass="bg-background"
        id="research-subsection-1"
        title="Sitting alone is uncomfortable. That discomfort is documented, consistent, and not personal."
        body={
          <p>
            In eleven studies, Harvard and University of Virginia researchers
            placed participants in a bare room for six to fifteen minutes with
            no phone, no reading material, and nothing to do.
            <sup className="text-accent">[1]</sup> Most found it unpleasant. In
            one sub-study, 67% of men and 25% of women chose to self-administer
            an electric shock rather than sit with their thoughts, despite
            having previously said they would pay to avoid that sensation.
            <sup className="text-accent">[1]</sup> A separate
            experience-sampling study tracking 2,250 adults across 250,000
            real-time data points found that people spend 46.9% of their waking
            hours thinking about something other than their current activity,
            and that mind-wandering was causally linked to lower happiness
            regardless of what they were doing.
            <sup className="text-accent">[2]</sup> The variance explained by
            whether the mind was present (10.8%) exceeded the variance explained
            by the activity itself (4.6%).
            <sup className="text-accent">[2]</sup> The discomfort of an empty
            room is not a character flaw. It is what an attention system
            calibrated for constant input feels like when the input stops.
          </p>
        }
        pullQuote={`\u201CThe mind is designed to engage with the world. Without training, people prefer doing to thinking, even if what they\u2019re doing is painful.\u201D`}
        pullCite="Wilson et al., Harvard / University of Virginia, 2014"
        stats={[
          {
            stat: "67%",
            body: "of men in a controlled study chose self-administered electric shock over fifteen minutes alone with their thoughts.",
            cite: "Wilson et al., Science, 2014",
          },
          {
            stat: "46.9%",
            body: "of waking hours spent mentally absent from whatever is physically happening. Mind-wandering is not the exception. It is the baseline.",
            cite: "Killingsworth & Gilbert, Science, 2010",
          },
          {
            stat: "4.6% vs 10.8%",
            body: "The activity you\u2019re doing explains 4.6% of your happiness. Whether your mind is present explains more than twice that.",
            cite: "Killingsworth & Gilbert, Science, 2010",
          },
        ]}
      />

      {/* Science Subsection 2 */}
      <ScienceSubsection
        bgClass="bg-secondary"
        title="When the brain goes quiet on the outside, it starts work on the inside."
        body={
          <p>
            Neuroimaging research spanning three decades shows that when external
            demands fall away, a network of brain regions becomes more active,
            not less. The Default Mode Network (DMN), comprising the medial
            prefrontal cortex, posterior cingulate cortex, precuneus, and medial
            temporal lobes, activates during rest and runs autobiographical
            memory retrieval, future simulation, social cognition, and
            self-referential thought.
            <sup className="text-accent">[3]</sup> Disrupted DMN function
            appears among the earliest measurable signs of depression,
            schizophrenia, and Alzheimer&rsquo;s disease, indicating that
            idle-brain processing carries clinical weight.
            <sup className="text-accent">[3]</sup> A University of Central
            Lancashire study found that participants who performed a passive,
            monotonous task before a creative challenge produced measurably more
            creative output than those who went straight to it, with the more
            passive the inactivity, the greater the gain, mediated by
            daydreaming and associative thought.
            <sup className="text-accent">[4]</sup> Boredom research from York
            University and the University of Waterloo identifies this as
            attentional failure with a functional purpose: bored individuals
            show increased motivation to pursue meaningful activity, including
            creative work and prosocial behaviour.
            <sup className="text-accent">[5]</sup> Sitting in a quiet room and
            finding it dull is frequently the precondition for what follows.
          </p>
        }
        pullQuote={`\u201CWhen you\u2019re bored, you tend to daydream and your mind wanders, and this is a very important part of the creative process.\u201D`}
        pullCite="Sandi Mann, University of Central Lancashire"
      />

      {/* Science Subsection 3 */}
      <ScienceSubsection
        bgClass="bg-background"
        title="The same quiet that feels distressing in one context is clinically restorative in another. The variable is choice."
        body={
          <p>
            Researchers placed nineteen healthy volunteers in a pitch-black,
            soundproofed chamber for fifteen minutes and measured psychotic-like
            experiences before and after. Five reported visual hallucinations of
            faces, six saw shapes that weren&rsquo;t there, and two reported
            sensing an unexplained presence.
            <sup className="text-accent">[6]</sup> A 2015 follow-up with 46
            participants confirmed the effect across both high and low
            hallucination-prone individuals, with state anxiety independently
            predicting severity of distortions, attributed to faulty source
            monitoring: without external input, the brain begins misattributing
            internally generated signals as coming from outside.
            <sup className="text-accent">[7]</sup> The Empty Room is quiet, not
            silent, and this is deliberate. Voluntary, comfortable sensory
            reduction produces opposite effects. A 2025 systematic review of 63
            flotation REST studies covering 1,838 participants found consistent
            positive outcomes across anxiety, pain, stress, and general mental
            wellbeing.<sup className="text-accent">[8]</sup> A 2018 clinical
            study found that a single flotation session produced anxiolytic and
            antidepressant effects persisting beyond 48 hours.
            <sup className="text-accent">[9]</sup> The same absence of
            stimulation that destabilises the brain when imposed becomes
            restorative when chosen. That is the mechanical basis of this
            business.
          </p>
        }
        pullQuote={`\u201CFloatation-REST produced significant reductions in anxiety and improvements in mood that outlasted the session itself.\u201D`}
        pullCite="Feinstein et al., PLOS One, 2018"
        stats={[
          {
            stat: "48 hours",
            body: "of measurable anxiety reduction following a single voluntary quiet session. The effect persists well beyond the room.",
            cite: "Feinstein et al., PLOS One, 2018",
          },
          {
            stat: "63 studies.",
            body: "The 2025 systematic review of flotation REST found consistent positive effects on anxiety, pain, and stress across all populations studied on 1,838 participants.",
            cite: "Lashgari et al., 2025",
          },
          {
            stat: "15 minutes",
            body: "is how long it takes in a dark, silent room before healthy people with no predisposition to psychosis begin experiencing perceptual distortions. The brain fills a void fast.",
            cite: "Mason & Brady, 2009",
          },
        ]}
      />
      </>)}

      {/* ─── DIFFERENTIATOR ─── */}
      <Section id="differentiator" className="md:grid md:grid-cols-2">
        {/* Placeholder illustration — full bleed left half on desktop */}
        <div className="hidden md:flex md:items-center md:justify-center md:bg-secondary">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-muted-foreground/30">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-xs tracking-[0.2em] uppercase">
              Illustration
            </span>
          </div>
        </div>

        <div className="px-6 py-28 md:py-40 md:pl-16 md:pr-12 lg:pl-20 lg:pr-16">
          <div className="max-w-lg">
            <h2 className="font-serif text-[clamp(1.4rem,2.8vw,2.2rem)] leading-snug tracking-tight">
              A float tank costs &pound;70 and requires lying in saltwater in
              complete darkness.
              <span className="mt-3 block">
                A meditation app requires a daily practice, a streak, and the
                discipline to start.
              </span>
              <span className="mt-3 block">
                The Empty Room requires a booking and the willingness to sit
                down.
              </span>
            </h2>

            <div className="mt-12 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Flotation REST is effective. A 2025 systematic review of 63
                studies confirms it.<sup className="text-accent">[8]</sup> At
                &pound;50 to &pound;90 a session, with a sensory experience that
                takes genuine acclimatisation, most people who would benefit
                never try it. Meditation apps convert a spontaneous human
                capacity into a programme with progress metrics. The streak
                becomes the point. The app becomes another obligation.
              </p>
              <p>
                The Empty Room asks for thirty minutes. The cognitive work
                happens whether you intend it to or not. You don&rsquo;t need a
                technique. You need a room.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── EARLY ACCESS ─── */}
      <Section className="border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight">
            We&rsquo;re opening our first room this year.
          </h2>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            We&rsquo;re building the waitlist before we build the rooms. Sign up
            now and you get first access when we open by area, your first
            session at &pound;3 rather than the standard drop-in rate, and a
            direct question from us about which part of London you&rsquo;d
            actually use this in.
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We&rsquo;re opening one room, running it properly, and expanding
            when the occupancy data says to. Not on a schedule. Not because it
            feels like time.
          </p>

          <div className="mt-12">
            <EmailCapture buttonText="I'm in" />
            <p className="mt-4 text-xs tracking-wide text-muted-foreground/70">
              We&rsquo;ll email you when your nearest room opens. Nothing else.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── REVIEWS ─── */}
      <Section className="py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
            What people said after our prototype sessions
          </p>
        </div>

        <div className="scroll-snap-x mt-12 flex gap-5 overflow-x-auto px-6 pb-4 md:mx-auto md:max-w-5xl md:grid md:grid-cols-2 md:overflow-visible md:px-6 lg:grid-cols-3">
          {[
            {
              quote:
                "\u201CI didn\u2019t think I was the kind of person who needed this. Twenty minutes in, I realised I\u2019d been cycling through the same anxious thought loop for weeks without noticing it was there.\u201D",
              author: "Sarah M., Peckham",
            },
            {
              quote:
                "\u201CHonestly I expected to feel stupid. I came out and the city felt quieter for about an hour. I booked a second session before I got on the tube.\u201D",
              author: "James T., Dalston",
            },
            {
              quote:
                "\u201CI float every couple of months. This is different. Shorter, easier to fit into a day, no prep. They solve separate problems. I\u2019ll use both.\u201D",
              author: "Rachel K., Bermondsey",
            },
            {
              quote:
                "\u201CMy first thought was that this was a bit much. Around twelve minutes in, I stopped having thoughts about it at all. That was the point.\u201D",
              author: "Anonymous",
            },
            {
              quote:
                "\u201CI work in an open-plan office. I had forgotten what it felt like to be in a room where nothing needed a response from me. Thirty minutes was almost enough.\u201D",
              author: "Tom H., Southwark",
            },
            {
              quote:
                "\u201CI\u2019ve tried meditation apps. I\u2019ve tried journalling. I\u2019ve tried a lot of things that required me to do them correctly. This just required me to show up.\u201D",
              author: "Priya S., Hackney",
            },
          ].map(({ quote, author }, i) => (
            <div
              key={i}
              className="flex w-[85vw] shrink-0 flex-col justify-between rounded-lg border border-border bg-card p-8 md:w-auto md:p-10"
            >
              <p className="font-serif text-base leading-relaxed italic">
                {quote}
              </p>
              <p className="mt-6 text-xs tracking-wide text-muted-foreground">
                {author} &middot; prototype session
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
            Reasonable questions.
          </h2>

          <Accordion type="single" collapsible className="mt-12">
            {[
              {
                q: "What is actually in the room?",
                a: "A chair. Warm, indirect lighting. Off-white or warm grey walls. Quiet, not silent; ambient sound sits below 30 decibels. A door that closes. Nothing on the walls.",
              },
              {
                q: "Why would I pay for this when I could just sit in a park?",
                a: "You could. A park offers birdsong, joggers, dogs, phone signal, and the low-grade social pressure of being seen sitting still without obvious purpose. Most people find that a space with no social context and no ambient demands is a qualitatively different experience from simply being somewhere quiet. The room removes the variables you didn\u2019t know were still pulling at your attention.",
              },
              {
                q: "Is this a meditation thing?",
                a: "No. There\u2019s nothing to follow, no technique required, no guidance. If you want to meditate, meditate. If you want to sit there and think about your mortgage, that\u2019s equally fine. The Default Mode Network research suggests the brain does useful work either way.",
              },
              {
                q: "Is it safe?",
                a: "Pre-book only. We know who\u2019s in which room and when each session ends. The app prompts you to check out; if a session overruns by five minutes, we\u2019re alerted. Emergency contact is collected at booking. You can leave at any point. The door is not locked.",
              },
              {
                q: "What if I find it uncomfortable?",
                a: "You probably will, at least for the first few minutes. Wilson et al. are clear that this is normal, consistent across age groups, and not a sign the experience isn\u2019t working. It generally settles. If it doesn\u2019t, you leave.",
              },
              {
                q: "Why 30 minutes?",
                a: "We tested 20, 30, and 45. Thirty was the most consistent result. Long enough to move past the initial discomfort, short enough to fit into a weekday.",
              },
            ].map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="py-2">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ─── CLOSING ─── */}
      <Section className="flex flex-col items-center px-6 py-28 text-center md:py-40">
        <h2 className="max-w-2xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-tight tracking-tight">
          The world will still be there when you come out.
        </h2>

        <div className="mt-12 flex w-full flex-col items-center gap-4">
          <EmailCapture buttonText="Join the waitlist" />
          <p className="mt-2 text-sm text-muted-foreground">
            First session &pound;3. No commitment. Just a room.
          </p>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className="font-serif text-lg tracking-tight">
            The Empty Room &middot; London
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Newsletter
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          <div className="space-y-1 text-xs text-muted-foreground/60">
            <p className="italic">Built on the psychology of doing nothing.</p>
            <p>&copy; The Empty Room 2025</p>
          </div>

          {/* References */}
          <div className="mt-4 flex flex-col items-center">
            <button
              onClick={() => setCitationsOpen(!citationsOpen)}
              className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground/60 uppercase transition-colors hover:text-foreground"
            >
              References
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-300 ${citationsOpen ? "rotate-90" : ""}`}
              >
                <path
                  d="M4 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {citationsOpen && (
              <ol className="mt-6 max-w-2xl space-y-2 text-left text-xs leading-relaxed text-muted-foreground/60">
                <li>
                  [1] Wilson, T.D., et al. (2014). Just think: The challenges
                  of the disengaged mind. <em>Science</em>, 345(6192),
                  75&ndash;77.
                </li>
                <li>
                  [2] Killingsworth, M.A., &amp; Gilbert, D.T. (2010). A
                  wandering mind is an unhappy mind. <em>Science</em>,
                  330(6006), 932.
                </li>
                <li>
                  [3] Buckner, R.L., Andrews-Hanna, J.R., &amp; Schacter, D.L.
                  (2008). The brain&rsquo;s default network.{" "}
                  <em>Annals of the New York Academy of Sciences</em>, 1124,
                  1&ndash;38.
                </li>
                <li>
                  [4] Mann, S., &amp; Cadman, R. (2014). Does being bored make
                  us more creative? <em>Creativity Research Journal</em>, 26(2),
                  165&ndash;173.
                </li>
                <li>
                  [5] Eastwood, J.D., et al. (2012). The unengaged mind:
                  Defining boredom in terms of attention.{" "}
                  <em>Perspectives on Psychological Science</em>, 7(5),
                  482&ndash;495.
                </li>
                <li>
                  [6] Mason, O.J., &amp; Brady, F. (2009). The psychotomimetic
                  effects of short-term sensory deprivation.{" "}
                  <em>Journal of Nervous and Mental Disease</em>, 197(10),
                  783&ndash;785.
                </li>
                <li>
                  [7] Daniel, C., &amp; Mason, O.J. (2015). Predicting
                  psychotic-like experiences during sensory deprivation.{" "}
                  <em>BioMed Research International</em>, 2015, 439379.
                </li>
                <li>
                  [8] Lashgari, E., et al. (2025). A systematic review of
                  flotation-REST.{" "}
                  <em>BMC Complementary Medicine and Therapies</em>, 25, 230.
                </li>
                <li>
                  [9] Feinstein, J.S., et al. (2018). Examining the short-term
                  anxiolytic and antidepressant effect of floatation-REST.{" "}
                  <em>PLOS One</em>, 13(2), e0190292.
                </li>
              </ol>
            )}
          </div>
        </div>
      </footer>
    </main>
  )
}
