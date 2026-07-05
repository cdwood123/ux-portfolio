import CaseStudyHero from '../components/CaseStudyHero'
import { CaseSection, CaseText, CaseBody, CaseFigure } from '../components/CaseStudyLayout'
import imgScreens from '../assets/case-studies/cashew/cashew-screens.png'
import imgVariablesPanel from '../assets/case-studies/cashew/cashew-variables-panel.png'
import imgTokenJson from '../assets/case-studies/cashew/cashew-token-json.png'
import imgStorybook from '../assets/case-studies/cashew/cashew-storybook.png'
import '../styles/pages/Cashew.css'

function PipelineDiagram() {
  return (
    <svg width="100%" viewBox="0 0 680 278" role="img" className="cashew-pipeline-svg">
      <title>Cashew token-to-code pipeline</title>
      <desc>Six-step pipeline: Claude-generated Token JSON feeds into Tokens Studio plugin import, creating 202 Figma Variables, which back five Figma components built with Claude Code and Figma MCP, documented in Storybook with six stories, and deployed to Vercel.</desc>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
      <g>
        <rect x="40" y="50" width="160" height="72" rx="8" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#3C3489" x="120" y="74" textAnchor="middle" dominantBaseline="central">Token JSON</text>
        <text fontFamily="inherit" fontSize="12" fill="#534AB7" x="120" y="98" textAnchor="middle" dominantBaseline="central">Claude-generated</text>
      </g>
      <g>
        <rect x="260" y="50" width="160" height="72" rx="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#085041" x="340" y="74" textAnchor="middle" dominantBaseline="central">Tokens Studio</text>
        <text fontFamily="inherit" fontSize="12" fill="#0F6E56" x="340" y="98" textAnchor="middle" dominantBaseline="central">2 collections</text>
      </g>
      <g>
        <rect x="480" y="50" width="160" height="72" rx="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#085041" x="560" y="74" textAnchor="middle" dominantBaseline="central">Figma Variables</text>
        <text fontFamily="inherit" fontSize="12" fill="#0F6E56" x="560" y="98" textAnchor="middle" dominantBaseline="central">202 variables</text>
      </g>
      <line x1="202" y1="86" x2="258" y2="86" stroke="#9c9a92" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)"/>
      <line x1="422" y1="86" x2="478" y2="86" stroke="#9c9a92" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)"/>
      <path d="M640,86 L660,86 L660,184 L642,184" fill="none" stroke="#9c9a92" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <g>
        <rect x="480" y="148" width="160" height="72" rx="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#085041" x="560" y="172" textAnchor="middle" dominantBaseline="central">Figma components</text>
        <text fontFamily="inherit" fontSize="12" fill="#0F6E56" x="560" y="196" textAnchor="middle" dominantBaseline="central">Claude Code + MCP</text>
      </g>
      <g>
        <rect x="260" y="148" width="160" height="72" rx="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#085041" x="340" y="172" textAnchor="middle" dominantBaseline="central">Storybook</text>
        <text fontFamily="inherit" fontSize="12" fill="#0F6E56" x="340" y="196" textAnchor="middle" dominantBaseline="central">6 stories, docs</text>
      </g>
      <g>
        <rect x="40" y="148" width="160" height="72" rx="8" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5"/>
        <text fontFamily="inherit" fontSize="14" fontWeight="500" fill="#4A1B0C" x="120" y="172" textAnchor="middle" dominantBaseline="central">Vercel</text>
        <text fontFamily="inherit" fontSize="12" fill="#712B13" x="120" y="196" textAnchor="middle" dominantBaseline="central">storybook.uxcharles.com</text>
      </g>
      <line x1="478" y1="184" x2="422" y2="184" stroke="#9c9a92" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)"/>
      <line x1="258" y1="184" x2="202" y2="184" stroke="#9c9a92" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)"/>
      <rect x="40" y="244" width="10" height="10" rx="2" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5"/>
      <text fontFamily="inherit" fontSize="12" fill="currentColor" x="56" y="253">AI-generated</text>
      <rect x="168" y="244" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5"/>
      <text fontFamily="inherit" fontSize="12" fill="currentColor" x="184" y="253">Design pipeline</text>
      <rect x="312" y="244" width="10" height="10" rx="2" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5"/>
      <text fontFamily="inherit" fontSize="12" fill="currentColor" x="328" y="253">Live deployment</text>
    </svg>
  )
}

export default function Cashew() {
  return (
    <main className="case-page">
      <CaseStudyHero
        title="Cashew"
        hook="A payment design system built token-first — from JSON to deployed component documentation."
        metaItems={[
          { label: 'Tags', value: 'Design Systems · Token Architecture · AI-Native Workflow · Figma · Storybook' },
          { label: 'Link', value: 'storybook.uxcharles.com', href: 'https://storybook.uxcharles.com' },
        ]}
      />

      <div className="case-outer">

        {/* 1. Hero image */}
        <CaseFigure
          variant="hero"
          src={imgScreens}
          alt="Cashew payment confirmation and transaction history screens"
        />

        {/* 2. The Problem */}
        <CaseSection>
          <CaseText label="The problem">
            <CaseBody>
              <p>
                Local service businesses, such as plumbers, dog groomers, and salon owners, typically
                collect payments in cash or through a point-of-sale system. Cashew changes this by
                allowing them to send payment requests and receive payments via text. Because the
                service operates within a familiar messaging thread, rather than a separate payment
                app, every detail—color, status indicator, and number display—must convey a sense of
                safety and clarity at a glance. This clarity should come from the system itself, not
                just the screen.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* 3. The Pipeline */}
        <CaseSection>
          <CaseText label="The pipeline" />
          <div className="cashew-diagram">
            <PipelineDiagram />
          </div>
          <CaseText>
            <ol className="cashew-pipeline-steps">
              <li className="cashew-pipeline-step">
                <span className="cashew-pipeline-step__title">cashew-tokens.json</span>
                <span className="cashew-pipeline-step__desc">
                  AI-generated token definitions, structured for Tokens Studio import.
                  Three-tier architecture: Primitives → Semantic → Component.
                </span>
              </li>
              <li className="cashew-pipeline-step">
                <span className="cashew-pipeline-step__title">Tokens Studio → Figma Variables</span>
                <span className="cashew-pipeline-step__desc">
                  106 primitive variables and 96 semantic variables. Library published. Every
                  component binds to semantic tokens, never to primitives directly.
                </span>
              </li>
              <li className="cashew-pipeline-step">
                <span className="cashew-pipeline-step__title">Figma Make + Claude Code (Figma MCP)</span>
                <span className="cashew-pipeline-step__desc">
                  Two-step workflow per component. Figma Make generates layer structure; Claude Code
                  handles Variable binding via MCP using exact node IDs.
                </span>
              </li>
              <li className="cashew-pipeline-step">
                <span className="cashew-pipeline-step__title">Storybook → Vercel</span>
                <span className="cashew-pipeline-step__desc">
                  CSS custom properties mirror Figma token names. Deployed at storybook.uxcharles.com.
                </span>
              </li>
            </ol>
          </CaseText>
        </CaseSection>

        {/* 4. Token Architecture */}
        <CaseSection>
          <CaseText label="Token architecture" />
          <CaseFigure
            variant="wide"
            className="cashew-figure--wide"
            src={imgVariablesPanel}
            alt="Figma Variables inspector showing Primitives and Semantic collections"
            caption="202 variables across two collections, published as a shared library"
          />
          <CaseText>
            <div className="cashew-token-blocks">
              <div className="cashew-token-block">
                <p className="cashew-token-block__label">Transaction states</p>
                <p className="cashew-token-block__desc">
                  <code>color/status/{'{'}paid|pending|failed|refunded|overdue{'}'}/{'{'}bg|border|text|icon{'}'}</code> —
                  30 tokens covering every visual property of every payment state.
                </p>
              </div>
              <div className="cashew-token-block">
                <p className="cashew-token-block__label">Financial display</p>
                <p className="cashew-token-block__desc">
                  <code>color/financial/{'{'}positive|negative|display|neutral{'}'}</code> — green means
                  gain, red means loss. These aren&apos;t preferences, they&apos;re contracts.
                </p>
              </div>
              <div className="cashew-token-block">
                <p className="cashew-token-block__label">Trust signals</p>
                <p className="cashew-token-block__desc">
                  <code>color/trust/{'{'}secure-bg|secure-border|secure-icon|secure-text{'}'}</code> —
                  added mid-build when PaymentAmountDisplay needed explicit visual reinforcement.
                </p>
              </div>
            </div>
          </CaseText>
          <CaseFigure
            variant="wide"
            className="cashew-figure--wide"
            src={imgTokenJson}
            alt="cashew-tokens.json open in editor showing primitive-to-semantic alias chain"
            caption="Tokens authored in JSON, imported via Tokens Studio — not Figma's native import"
          />
        </CaseSection>

        {/* 5. Components in Production */}
        <CaseSection>
          <CaseText label="Components in production" />
          <CaseFigure
            variant="wide"
            className="cashew-figure--wide"
            src={imgStorybook}
            alt="Storybook showing PaymentAmountDisplay stories and Docs page"
            caption="Six named stories plus auto-docs, deployed to storybook.uxcharles.com"
          />
          <CaseText>
            <CaseBody>
              <p>
                Five components built and bound: StatusBadge, TransactionRow, Button, Input,
                PaymentAmountDisplay. All colors and spacing reference semantic variables. No
                hardcoded values. Button and Input were sourced from shadcn/ui&apos;s Figma kit and
                remapped to Cashew semantic variables — because real design system work means
                inheriting commodity components and making them yours.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* 6. What the AI Did (and What It Didn't) */}
        <CaseSection>
          <CaseText label="What the AI did (and what it didn't)">
            <CaseBody>
              <p>
                Claude generated the token JSON, bound Variables to components via MCP, and placed
                Lucide icons by fetching SVGs from npm.
              </p>
            </CaseBody>
            <p className="cashew-callout-header">What required human judgment to catch:</p>
            <ul className="cashew-callout-list">
              <li className="cashew-callout-item">
                Trust token reference paths were broken on first import (
                <code>{'{'}trust.*{'}'}</code> instead of <code>{'{'}color.trust.*{'}'}</code>) —
                Tokens Studio accepted them silently.
              </li>
              <li className="cashew-callout-item">
                Two hallucinated token names appeared in the generated JSON. They resolved to
                nothing in Figma.
              </li>
              <li className="cashew-callout-item">
                Claude Code&apos;s success messages confirm a binding was written, not that the alias
                chain resolves. Verification is a separate step.
              </li>
            </ul>
            <CaseBody>
              <p>
                These are documented, not hidden. Production-ready systems account for where the
                tooling fails.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* 7. Outcomes */}
        <CaseSection>
          <CaseText label="Outcomes">
            <div className="cashew-stats">
              <div className="cashew-stat">
                <p className="cashew-stat__number">202</p>
                <p className="cashew-stat__desc">variables across two Figma collections</p>
              </div>
              <div className="cashew-stat">
                <p className="cashew-stat__number">5</p>
                <p className="cashew-stat__desc">components with full semantic variable binding</p>
              </div>
              <div className="cashew-stat">
                <p className="cashew-stat__number">6</p>
                <p className="cashew-stat__desc">Storybook stories deployed to Vercel</p>
              </div>
              <div className="cashew-stat">
                <p className="cashew-stat__number">1</p>
                <p className="cashew-stat__desc">token-to-code pipeline from JSON to live docs</p>
              </div>
            </div>
            <a
              href="https://storybook.uxcharles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cashew-cta"
            >
              View Storybook →
            </a>
          </CaseText>
        </CaseSection>

      </div>
    </main>
  )
}
