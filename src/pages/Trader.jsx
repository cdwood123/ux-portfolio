import CaseStudyHero from '../components/CaseStudyHero'
import { CaseSection, CaseText, CaseBody, CaseFigure, CaseTwoUp } from '../components/CaseStudyLayout'
import imgDashTriptych from '../assets/case-studies/trader/dash_triptych.png'
import imgRiskDesk from '../assets/case-studies/trader/risk_desk_mockup.png'
import imgRules from '../assets/case-studies/trader/rules.png'
import imgHistory from '../assets/case-studies/trader/history.png'
import imgWarning from '../assets/case-studies/trader/warning_mockup.png'
import imgLockout from '../assets/case-studies/trader/lockout_screen.png'
import imgReview from '../assets/case-studies/trader/review.png'
import imgLogTrade from '../assets/case-studies/trader/log_trade.png'
import '../styles/pages/Trader.css'

export default function Trader() {
  return (
    <main className="case-page">
      <CaseStudyHero
        title="Prop Trader Risk Journal"
        hook="An intervention system that surfaces account risk in real time — designed for peripheral vision"
        metaItems={[
          { label: 'Role', value: 'Solo designer, research through prototype' },
          { label: 'Timeline', value: '3 months' },
          { label: 'Domain', value: 'Fintech / prop trading risk management' },
        ]}
      />

      <div className="case-outer">

        {/* Hero image */}
        <CaseFigure
          variant="hero"
          src={imgDashTriptych}
          alt="Three-panel dashboard showing the risk journal in its safe, warning, and critical states"
        />

        {/* Section — Executive Summary */}
        <CaseSection>
          <CaseText label="Executive summary">
            <CaseBody>
              <p>
                Prop firm traders blow up accounts not because they lack knowledge, but because they
                make decisions while emotionally compromised. Existing tools are retrospective; they
                log trades after the damage is done. I designed an intervention system that surfaces
                risk status in real time, built around a single behavioral insight: by the time a
                trader looks directly at a dashboard, it is already too late.
              </p>
              <p>
                The interface had to communicate danger through peripheral vision alone. The result
                is a high-fidelity prototype tested with active traders, with a validated interaction
                model that reduced override decisions in the critical warning state during testing.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* Section — The Problem Space */}
        <CaseSection className="trader-section--aside">
          <div className="trader-aside-col">
            <p className="case-section__label label-upper">The problem space</p>
            <CaseBody>
              <p>
                Prop trading firms impose daily loss limits. Traders who breach them lose their
                funded account. Blow-up posts on Reddit and Discord follow a consistent pattern:
                the trader knew their rules, saw the warning signs, and kept trading anyway. The
                tool they had open did nothing to interrupt that spiral.
              </p>
              <p>
                The business problem was clear: a risk journal that only works when the trader is
                calm has zero value when it counts. The real failure mode is not ignorance; it is
                emotional override.
              </p>
              <p>
                Constraints I was working within: this was a solo project with no research budget
                or development resources. Target users work across multiple monitors, with the
                journal on a secondary screen. Any solution that required the trader to shift focus
                away from their primary screen would be ignored.
              </p>
              <p>
                The key insight came from reading hundreds of raw post-blowup posts and Discord
                threads. Traders describe the moment of bad decision-making in nearly identical
                language: &quot;Tilt.&quot; &quot;Revenge trade.&quot; &quot;I knew I should stop.&quot; The problem was not
                information; it was intervention timing.
              </p>
            </CaseBody>
          </div>
          <CaseFigure
            src={imgRiskDesk}
            alt="Risk journal on a secondary monitor beside a trader's primary charting screen"
            caption="The journal lives on a secondary screen beside the trader's primary charting
              environment. Any design that demanded active attention would be ignored at the
              moments it mattered most."
          />
        </CaseSection>

        {/* Section — Strategy and Approach */}
        <CaseSection>
          <CaseText label="Strategy and approach">
            <CaseBody>
              <p>
                I used AI to synthesize Discord and subreddit posts into an emotional pattern map,
                which compressed what would have been weeks of manual tagging into a few days. That
                map drove the information architecture, not wireframes.
              </p>
              <p>
                Before touching layout, I inventoried every meaningful state the interface could
                enter: safe range, 80% drawdown warning, 95% critical threshold, API data dropout,
                hard lockout, and post-liquidation recovery. State-first design is the discipline
                that separates a dashboard from a system that holds up under real conditions.
              </p>
              <p>
                From there I moved directly into high-fidelity exploration, using Figma Make to
                generate structural options quickly and Material 3 as a headless component
                foundation so I was not reinventing date pickers.
              </p>
              <p>
                I validated directional decisions with a small group of early-stage prop traders.
                When testers asked for &quot;AI trade analysis,&quot; what they actually meant was &quot;I don&apos;t
                understand why I lost.&quot; I improved rule-break alert clarity instead of scoping
                an AI feature I could not support.
              </p>
            </CaseBody>
          </CaseText>
          <CaseTwoUp>
            <CaseFigure
              src={imgRules}
              alt="Rules configuration screen where traders set their daily loss limits"
              caption="Traders set their loss limits and trading rules here. The state system was
                mapped prior to any visual work, as every screen had to consider how the rules
                shaped live risk calculations."
            />
            <CaseFigure
              src={imgHistory}
              alt="Trade history log showing past sessions with risk annotations"
              caption="The history view gives traders a retrospective record of sessions, including the
                emotional and rule-break context that standard P&L logs omit."
            />
          </CaseTwoUp>
        </CaseSection>

        {/* Section — Key Decisions */}
        <CaseSection>
          <CaseText
            label="Key decisions and iterations"
            heading="Peripheral vision as the primary design constraint"
          >
            <CaseBody>
              <p>
                Traders watch their primary screen. The journal sits in their peripheral field. If
                risk status was not readable at 20 degrees off-center, the interface had failed its
                main job before the trader even looked at it.
              </p>
              <p>
                This ruled out data-dense layouts, subtle color shifts, and icon-based status
                indicators. The solution was a health bar metaphor with a deliberate color
                progression: cool greens in the safe range, amber at 80%, aggressive red at 95%.
                Typography scaled proportionally, with the loss figure growing larger and bolder as
                the situation worsened. Color and scale were the signaling system and everything else
                was secondary.
              </p>
            </CaseBody>
          </CaseText>
          <CaseFigure
            variant="wide"
            src={imgWarning}
            alt="Dashboard in the 80% drawdown warning state — amber color shift and enlarged loss figure"
            caption="The 80% warning state indicates a simultaneous shift in color and typographic scale, ensuring
              readability from the periphery without requiring the trader to divert their attention from
              the primary screen."
          />
        </CaseSection>

        <CaseSection>
          <CaseText heading="The hard stop screen and intentional friction">
            <CaseBody>
              <p>
                When a trader hits their daily limit, the interface enters lockout mode. To
                continue, they have to type a confirmation phrase: &quot;I am breaking my rules.&quot;
              </p>
              <p>
                A passive confirmation dialog does not create enough resistance for someone in an
                emotional state. The typing requirement forces a verbal, conscious acknowledgment.
                It is friction by design.
              </p>
              <p>
                The lockout screen is intentionally different in visual character from the rest of
                the interface — stark and minimal — to break the flow state rather than blend into
                it. In testing, this screen produced the longest pause of any interaction in the
                prototype. That was the goal.
              </p>
            </CaseBody>
          </CaseText>
          <CaseFigure
            variant="wide"
            src={imgLockout}
            alt="Hard lockout screen requiring the trader to type 'I am breaking my rules' to continue"
            caption="The lockout screen. Stark by design — the visual break from the normal interface
              is the intervention. The typed phrase forces a conscious, verbal acknowledgment
              before any further trading action is possible."
          />
        </CaseSection>

        {/* Section — Impact and Learnings */}
        <CaseSection>
          <CaseText label="Impact and learnings">
            <CaseBody>
              <p>
                The prototype was validated with active traders. During testing, the critical state
                color shift was read correctly without instruction by every participant. The hard
                stop screen reduced immediate override attempts compared to a standard confirmation
                modal tested in an earlier iteration.
              </p>
            </CaseBody>
          </CaseText>
          <CaseTwoUp>
            <CaseFigure
              src={imgReview}
              alt="Post-session review screen with annotated trade timeline and rule-break flags"
              caption="The post-session review surfaces rule breaks in context, giving traders a structured
                way to examine the decisions that led to losses rather than just the losses themselves."
            />
            <CaseFigure
              src={imgLogTrade}
              alt="Log trade entry panel with fields for emotional state and rule adherence"
              caption="The trade logging panel captures emotional state alongside standard trade data.
                That pairing is what makes the retrospective review useful — P&L alone doesn't
                explain why a decision was made."
            />
          </CaseTwoUp>
        </CaseSection>

        {/* Section — What I'd Do Differently */}
        <CaseSection>
          <CaseText label="What I'd do differently">
            <CaseBody>
              <p>
                The test cohort was early-stage traders. Experienced prop traders — the ones closest
                to real account risk — would have been higher-value participants. I would prioritize
                recruiting that group before any production build.
              </p>
              <p>
                I would also run the state documentation earlier. Mapping edge cases before any
                visual work saved significant rework time, and I would make that the first
                deliverable on any similar project.
              </p>
              <p>
                The broader design principle this project reinforced: for any interface used by
                domain experts under cognitive load, the question is not &quot;what information do we
                show?&quot; It is &quot;what is the minimum a user needs to read to know if they are in
                danger?&quot; That question applies equally to trading, industrial process monitoring,
                and any other high-stakes data environment.
              </p>
              <p className="trader-status">Project status: High-fidelity prototype validated. MVP development in progress.</p>
            </CaseBody>
          </CaseText>
        </CaseSection>

      </div>
    </main>
  )
}
