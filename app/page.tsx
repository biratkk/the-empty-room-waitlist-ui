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
}: {
  title: string
  body: React.ReactNode
  pullQuote: string
  pullCite: string
  stats: { stat: string; body: string; cite: string }[]
  bgClass?: string
}) {
  return (
    <div className={`${bgClass} px-6 py-20 md:py-28`}>
      <div className="mx-auto max-w-5xl">
        <h3 className="max-w-2xl font-serif text-[clamp(1.3rem,2.5vw,1.75rem)] leading-snug tracking-tight">
          {title}
        </h3>

        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {body}
        </div>

        <blockquote className="my-16 border-l-2 border-accent py-2 pl-8 md:pl-12">
          <p className="max-w-2xl font-serif text-lg leading-relaxed italic md:text-xl lg:text-2xl">
            {pullQuote}
          </p>
          <cite className="mt-4 block text-sm not-italic tracking-wide text-muted-foreground">
            &mdash; {pullCite}
          </cite>
        </blockquote>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {stats.map(({ stat, body: statBody, cite }) => (
            <div
              key={stat}
              className="flex flex-col justify-between bg-background p-7 md:p-9"
            >
              <div>
                <span className="font-serif text-3xl tracking-tight text-accent md:text-4xl">
                  {stat}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {statBody}
                </p>
              </div>
              <p className="mt-5 text-[11px] italic text-muted-foreground/50">
                {cite}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [citationsOpen, setCitationsOpen] = useState(false)

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
                Three rooms across London. Warm grey walls, good light, a chair
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
              { label: "Location", value: "London \u00B7 3 sites \u00B7 TBC" },
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
        </div>
      </Section>

      {/* Science Subsection 1 */}
      <ScienceSubsection
        bgClass="bg-background"
        title="Sitting alone feels unbearable. That's a recent development, and it's measurable."
        body={
          <>
            <p>
              In 2014, researchers at Harvard and the University of Virginia ran
              eleven studies in which participants were placed in a sparsely
              furnished room for six to fifteen minutes &mdash; no phone, no
              reading material, nothing to engage with &mdash; and asked to
              entertain themselves with their thoughts.
              <sup className="text-accent">[1]</sup> Most found it genuinely
              unpleasant. In one sub-study, participants were given access to a
              button that delivered a mild electric shock &mdash; a sensation
              they had previously said they would pay money <em>not</em> to
              experience. After fifteen minutes alone with nothing to do, 67% of
              men and 25% of women pressed it at least once.
              <sup className="text-accent">[1]</sup>
            </p>
            <p>
              This wasn&rsquo;t a finding about masochism. It was a finding
              about the modern mind&rsquo;s relationship to stillness. The
              discomfort is real, well-documented, and not a personal failing
              &mdash; it&rsquo;s what happens when a cognitive system that
              evolved for continuous environmental engagement is suddenly given
              nothing to engage with.
            </p>
            <p>
              Separately, a large-scale experience-sampling study published in{" "}
              <em>Science</em> pinged 2,250 adults at random moments throughout
              their days and found that people spend 46.9% of their waking hours
              thinking about something other than what they&rsquo;re currently
              doing.<sup className="text-accent">[2]</sup> Mind-wandering at
              that scale is the cognitive baseline &mdash; and the same study
              found it was causally linked to lower reported happiness,
              regardless of what people were actually doing at the time.
              <sup className="text-accent">[2]</sup>
            </p>
            <p>
              The discomfort of sitting in a quiet room is, in part, the
              unfamiliarity of having nowhere for that wandering attention to
              land. The Empty Room doesn&rsquo;t resolve that immediately. But
              repeated exposure to unstructured quiet &mdash; voluntary, bounded,
              comfortable &mdash; is exactly the condition under which that
              discomfort begins to loosen.
            </p>
          </>
        }
        pullQuote={`\u201CThe mind is designed to engage with the world. Without training, people prefer doing to thinking \u2014 even if what they\u2019re doing is painful.\u201D`}
        pullCite="Wilson et al., Harvard / University of Virginia, 2014"
        stats={[
          {
            stat: "67%",
            body: "of male participants chose self-administered electric shock over sitting alone with their thoughts for 15 minutes.",
            cite: "Wilson et al., Science, 2014",
          },
          {
            stat: "47%",
            body: "of waking hours spent thinking about something other than the present task \u2014 across 250,000 real-time data points from 2,250 adults.",
            cite: "Killingsworth & Gilbert, Science, 2010",
          },
          {
            stat: ">10%",
            body: "within-person variance in happiness explained by mind-wandering status alone \u2014 more than the activity being performed.",
            cite: "Killingsworth & Gilbert, Science, 2010",
          },
        ]}
      />

      {/* Science Subsection 2 */}
      <ScienceSubsection
        bgClass="bg-secondary"
        title="The idle brain is not resting. It's running a process you've been interrupting."
        body={
          <>
            <p>
              When external demands fall away, a specific network of brain
              regions becomes <em>more</em> active &mdash; not less. The medial
              prefrontal cortex, posterior cingulate cortex, precuneus, and
              medial temporal lobes collectively form what neuroscientists call
              the Default Mode Network (DMN).
              <sup className="text-accent">[3]</sup> A comprehensive review
              synthesising three decades of neuroimaging research found this
              network is consistently engaged during autobiographical memory
              retrieval, future simulation, social cognition, and
              self-referential thought.
              <sup className="text-accent">[3]</sup>
            </p>
            <p>
              This has a direct implication for creativity. A University of
              Central Lancashire study found that participants who spent fifteen
              minutes on a deliberately dull task subsequently produced
              measurably more creative output than a control group who went
              straight to the creative task.
              <sup className="text-accent">[4]</sup> The more passive the
              inactivity, the larger the effect.
              <sup className="text-accent">[4]</sup>
            </p>
            <p>
              Boredom itself has a specific attentional signature. A theoretical
              synthesis identified boredom not as simple under-stimulation, but
              as a failure of attention &mdash; the inability to lock onto either
              internal or external information in a way that feels meaningful.
              <sup className="text-accent">[5]</sup> But the same researchers
              documented boredom&rsquo;s well-established links to
              meaning-seeking behaviour: bored individuals reliably pursue
              activities and ideas that seem purposive.
              <sup className="text-accent">[5]</sup> Boredom is not a void. It
              is pressure &mdash; a signal that available cognitive capacity
              wants somewhere to go.
            </p>
          </>
        }
        pullQuote={`\u201CWhen you\u2019re bored, you tend to daydream and your mind wanders, and this is a very important part of the creative process.\u201D`}
        pullCite="Sandi Mann, University of Central Lancashire"
        stats={[
          {
            stat: "4,000+",
            body: "citations for Buckner et al.\u2019s foundational review of the Default Mode Network \u2014 among the most referenced papers in cognitive neuroscience.",
            cite: "Buckner et al., 2008",
          },
          {
            stat: "More creative",
            body: "output produced by participants who did a passive, boring task before a creative challenge than those who went straight to it.",
            cite: "Mann & Cadman, 2014",
          },
          {
            stat: "Meaning-seeking",
            body: "reliably increases after boredom induction \u2014 bored participants show greater intention to volunteer, create, and engage with purposive activity.",
            cite: "Eastwood et al., 2012",
          },
        ]}
      />

      {/* Science Subsection 3 */}
      <ScienceSubsection
        bgClass="bg-background"
        title="The same absence of stimulation that feels distressing can be deeply restorative. The difference is whether you chose it."
        body={
          <>
            <p>
              In 2009, researchers placed nineteen healthy volunteers in a
              pitch-black, soundproofed chamber for fifteen minutes. Five
              reported visual hallucinations of faces, six saw shapes that
              weren&rsquo;t present, and two reported sensing an unexplained
              presence in the room.<sup className="text-accent">[6]</sup> The
              brain fills any perceptual vacancy &mdash; without environmental
              input to check against, it begins misattributing internally
              generated signals as external.
              <sup className="text-accent">[7]</sup>
            </p>
            <p>
              The Empty Room is not a sensory deprivation chamber. It is quiet,
              not silent. Dim, not dark. The distinction matters &mdash; and
              it&rsquo;s where the therapeutic research becomes relevant.
            </p>
            <p>
              Flotation REST uses voluntary, comfortable near-total sensory
              reduction to produce measurable psychological effects. A 2025
              systematic review of 63 studies covering 1,838 participants found
              consistently positive effects on pain, stress, anxiety, and
              general mental wellbeing.
              <sup className="text-accent">[8]</sup> A 2018 study found that
              single flotation sessions produced anxiolytic effects that
              persisted for over 48 hours.
              <sup className="text-accent">[9]</sup>
            </p>
            <p>
              What changes is agency &mdash; the knowledge that you can leave,
              that the experience is bounded, that you selected it. Thirty
              minutes in a quiet room that you booked from your phone is an
              entirely different cognitive event than thirty minutes in a quiet
              room you were placed in. That gap &mdash; between imposed
              stillness and chosen stillness &mdash; is the entire business.
            </p>
          </>
        }
        pullQuote={`\u201CContext, agency, and expectation fundamentally alter the psychological experience of doing nothing.\u201D`}
        pullCite="Synthesised from Feinstein et al. (2018) and Lashgari et al. (2025)"
        stats={[
          {
            stat: "48 hrs",
            body: "duration of anxiety reduction following a single flotation session in healthy adults with elevated anxiety.",
            cite: "Feinstein et al., PLOS One, 2018",
          },
          {
            stat: "63 studies",
            body: "synthesised in the 2025 systematic review of flotation REST \u2014 consistent positive effects across pain, stress, and mental wellbeing.",
            cite: "Lashgari et al., 2025",
          },
          {
            stat: "15 min",
            body: "time before healthy volunteers in a dark, silent room begin reporting perceptual distortions \u2014 demonstrating how quickly the brain responds to absent stimulation.",
            cite: "Mason & Brady, 2009",
          },
        ]}
      />

      {/* Citation block */}
      <div className="border-t border-border bg-secondary px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => setCitationsOpen(!citationsOpen)}
            className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
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
            References
          </button>

          {citationsOpen && (
            <ol className="mt-6 space-y-2 text-xs leading-relaxed text-muted-foreground/70">
              <li>
                [1] Wilson, T.D., et al. (2014). Just think: The challenges of
                the disengaged mind. <em>Science</em>, 345(6192), 75&ndash;77.
              </li>
              <li>
                [2] Killingsworth, M.A., &amp; Gilbert, D.T. (2010). A wandering
                mind is an unhappy mind. <em>Science</em>, 330(6006), 932.
              </li>
              <li>
                [3] Buckner, R.L., Andrews-Hanna, J.R., &amp; Schacter, D.L.
                (2008). The brain&rsquo;s default network. <em>Annals of the New
                York Academy of Sciences</em>, 1124, 1&ndash;38.
              </li>
              <li>
                [4] Mann, S., &amp; Cadman, R. (2014). Does being bored make us
                more creative? <em>Creativity Research Journal</em>, 26(2),
                165&ndash;173.
              </li>
              <li>
                [5] Eastwood, J.D., et al. (2012). The unengaged mind: Defining
                boredom in terms of attention. <em>Perspectives on Psychological
                Science</em>, 7(5), 482&ndash;495.
              </li>
              <li>
                [6] Mason, O.J., &amp; Brady, F. (2009). The psychotomimetic
                effects of short-term sensory deprivation. <em>Journal of
                Nervous and Mental Disease</em>, 197(10), 783&ndash;785.
              </li>
              <li>
                [7] Daniel, C., &amp; Mason, O.J. (2015). Predicting
                psychotic-like experiences during sensory deprivation.{" "}
                <em>BioMed Research International</em>, 2015, 439379.
              </li>
              <li>
                [8] Lashgari, E., et al. (2025). A systematic review of
                flotation-REST. <em>BMC Complementary Medicine and
                Therapies</em>, 25, 230.
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

      {/* ─── DIFFERENTIATOR ─── */}
      <Section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-[clamp(1.4rem,2.8vw,2.2rem)] leading-snug tracking-tight">
            A float tank costs &pound;70 and requires lying in saltwater in
            complete darkness.
            <span className="mt-3 block">
              A meditation app requires a daily practice, a streak, and the
              discipline to start.
            </span>
            <span className="mt-3 block">
              The Empty Room requires a booking and the willingness to sit down.
            </span>
          </h2>

          <div className="mt-12 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Flotation REST is effective &mdash; the 2025 systematic review of
              63 studies confirms it.<sup className="text-accent">[8]</sup> But
              at &pound;50&ndash;&pound;90 a session and with a sensory
              experience that takes genuine acclimatisation, the barrier to a
              first visit is high. Many people who would benefit never try it.
            </p>
            <p>
              Meditation apps carry their own cost: they convert a spontaneous
              human capacity into a programme with progress metrics. The streak
              becomes the point. The app becomes another obligation. Plenty of
              people have downloaded three of them and used none.
            </p>
            <p>
              The Empty Room asks for thirty minutes. The cognitive heavy lifting
              happens whether you intend it to or not &mdash; that&rsquo;s what
              the Default Mode Network research shows. You don&rsquo;t need a
              technique. You need a room.
            </p>
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
            question from us about which part of London you&rsquo;d actually use
            this in.
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We&rsquo;re opening one room, running it properly, and expanding
            when the occupancy data tells us to &mdash; not on a schedule, and
            not because it feels like time.
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
                "\u201CI float every couple of months. This is different \u2014 shorter, easier to fit into a day, no prep. They\u2019re solving separate problems. I\u2019ll use both.\u201D",
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
                &mdash; {author} &middot; prototype session
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
                a: "A chair. Warm, indirect lighting. Off-white or warm grey walls. Quiet \u2014 not silent; ambient sound sits below 30 decibels. A door that closes. Nothing on the walls.",
              },
              {
                q: "Why would I pay for this when I could just sit in a park?",
                a: "You could. A park offers birdsong, joggers, dogs, phone signal, and the low-grade social pressure of being seen sitting still without obvious purpose. If that environment delivers what you need, it probably already would be. Most people find that having a space with no social context and no external demands is a qualitatively different experience from simply being somewhere quiet. The room removes the variables you didn\u2019t know were still pulling at your attention.",
              },
              {
                q: "Is this a meditation thing?",
                a: "No. There\u2019s nothing to follow, no technique required, no guidance. If you want to meditate, meditate. If you want to sit there and think about your mortgage, that\u2019s equally fine. The research on the Default Mode Network suggests the brain does useful work either way.",
              },
              {
                q: "Is it safe?",
                a: "Pre-book only \u2014 we know who\u2019s in which room and when each session ends. The app prompts you to check out; if a session overruns by five minutes, we\u2019re alerted. Emergency contact is collected at booking. You can leave at any point. The door is not locked.",
              },
              {
                q: "What if I find it uncomfortable?",
                a: "You probably will, at least for the first few minutes. The Wilson et al. research is clear on this \u2014 the discomfort is normal, consistent across age groups, and not a sign the experience isn\u2019t working. It generally settles. If it doesn\u2019t, you leave.",
              },
              {
                q: "Why 30 minutes?",
                a: "We tested 20, 30, and 45. Thirty was the most consistent result \u2014 long enough to move past the initial discomfort, short enough to be genuinely usable on a weekday.",
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
        </div>
      </footer>
    </main>
  )
}
