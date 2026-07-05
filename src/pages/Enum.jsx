import CaseStudyHero from '../components/CaseStudyHero'
import { CaseSection, CaseText, CaseBody, CaseFigure, CaseTwoUp } from '../components/CaseStudyLayout'
import imgBoundarySelect from '../assets/case-studies/enum/App_Boundary_Selection.png'
import imgStoryMap from '../assets/case-studies/enum/Screenshot 2026-06-11 at 1.10.41 AM.png'
import imgPlotInfo from '../assets/case-studies/enum/App_Address.png'
import imgOwnership from '../assets/case-studies/enum/App_ownership.png'
import imgDisputes from '../assets/case-studies/enum/Disputes.png'
import imgEditBoundary from '../assets/case-studies/enum/Edit_Boundary.png'
import imgWebRecord from '../assets/case-studies/enum/Editable-Desktop.png'
import '../styles/pages/Enum.css'

export default function Enum() {
  return (
    <main className="case-page">
      <CaseStudyHero
        title="Enum"
        hook="Bringing land rights into the digital age for 17 million Zambians"
        metaItems={[
          { label: 'Company', value: 'Medici Land Governance' },
          { label: 'Role', value: 'Sole UX Designer' },
          { label: 'Year', value: '2019–2020' },
          { label: 'Duration', value: 'Delivered 2021' },
        ]}
      />

      <div className="case-outer">

        {/* Section 1 — Hero image */}
        <CaseFigure
          variant="hero"
          src={imgBoundarySelect}
          alt="Census worker selecting a parcel boundary on a tablet from satellite imagery"
          caption="Census workers select a parcel boundary from satellite imagery before beginning data
            collection. Designed for use in the field, on consumer Android hardware, without a
            reliable data connection."
        />

        {/* Section 2 — The Stakes */}
        <CaseSection>
          <CaseText label="The stakes">
            <CaseBody>
              <p>
                In Zambia, a missing or disputed land title isn&apos;t a paperwork inconvenience —
                it can result in losing your home, your farm, or your family&apos;s generational wealth
                without any legal recourse. The government&apos;s enumeration process, which involves
                systematic door-to-door collection of landowner information, was designed to provide
                formal property titles for over 17 million people. However, this process relied
                heavily on paper, tribal knowledge, and trust that the data received from the field
                was accurate. Unfortunately, it wasn&apos;t always accurate.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* Section 3 — The Problem */}
        <CaseSection>
          <CaseText label="The problem">
            <CaseBody>
              <p>
                A test project conducted in 2018 revealed two critical failures. First, there was a
                lack of data validation — census workers were able to input anything, and their
                submissions were accepted as truth, leading to months of data cleanup. Second, there
                was no cohesive understanding of the overall process; no one within Medici or the
                Zambian government agencies involved had a comprehensive view of the entire system.
                Each person understood their own responsibilities, but nobody held the complete
                picture. During my initial discovery phase, the word I heard most often was &quot;murky.&quot;
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* Section 4 — My Role */}
        <CaseSection>
          <CaseText label="My role">
            <CaseBody>
              <p>
                As the sole designer on a cross-functional team, I worked directly with the Zambian
                government, collaborating with everyone from field-level census workers to members of
                parliament at the Ministry of Natural Lands and Resources. My responsibilities
                included conducting research, developing information architecture, creating wireframes,
                and producing the final Figma prototype presented for approval to the Ministry.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* Section 5 — Making the Invisible Visible */}
        <CaseSection>
          <CaseText label="The process" heading="Making the invisible visible">
            <CaseBody>
              <p>
                The first design challenge I faced was not about creating a screen, but rather
                fostering a shared understanding. Every stakeholder I interviewed was clear about
                their responsibilities, yet none could articulate the complete end-to-end process.
                Institutional knowledge was scattered among individuals, sticky notes, and
                disconnected documents. To consolidate this knowledge, I built a series of story
                maps, gradually migrating tools as understanding evolved, until we developed a single
                artifact that everyone could refer to. This story map became the foundation upon
                which all subsequent design decisions were based.
              </p>
            </CaseBody>
            <blockquote className="enum-blockquote">
              <p>
                &quot;Shout out to Charles for putting everything into the Whimsical file. I can&apos;t tell
                you how invaluable that&apos;s been. It makes it even more essential that we have
                meetings like this to capture rich data.&quot;
              </p>
              <p className="caption enum-blockquote__attribution">— Martin, GIS Team</p>
            </blockquote>
          </CaseText>
          <CaseFigure
            variant="wide"
            src={imgStoryMap}
            alt="End-to-end enumeration process story map built during discovery"
            caption="One stage of the end-to-end process map built during discovery. No single stakeholder
              could describe the full enumeration process — this artifact became the shared source of
              truth for the entire team."
          />
        </CaseSection>

        {/* Section 6 — Designing for the Field */}
        <CaseSection>
          <CaseText heading="Designing for the field">
            <CaseBody>
              <p>
                The tablet interface needed to be effective for census workers collecting data
                door-to-door under challenging conditions — users who could read but might not know
                how to sign their names or read a map, all while dealing with unreliable or
                nonexistent connectivity. There was pressure to move through dozens of households
                each day. The product could not depend on a live connection; instead, data had to be
                stored locally on the device and synchronized when workers returned to the office.
                Every interaction needed to be usable without requiring advanced technical skills,
                and every input had to be designed with the understanding that a human under time
                pressure would be making it.
              </p>
            </CaseBody>
          </CaseText>
          <CaseTwoUp>
            <CaseFigure
              src={imgOwnership}
              alt="Tablet screen showing the first question: who owns this land?"
              caption="The first question in every new record emphasized radical simplicity — every screen
                had to operate effectively under time constraints, in the field, and without
                confusion."
            />
            <CaseFigure
              src={imgPlotInfo}
              alt="Tablet screen showing the Plot Info address form"
              caption="We used plain-language questions, presented one at a time, to accommodate users who
                could read but may have limited experience with digital interfaces or formal
                documents."
            />
          </CaseTwoUp>
        </CaseSection>

        {/* Section 7 — Building a System That Checks Itself */}
        <CaseSection>
          <CaseText heading="Building a system that checks itself">
            <CaseBody>
              <p>
                The core data integrity issue identified during the 2018 test was how human input
                was treated as absolute truth. Our solution reframed validation as a social
                mechanism: each person could review and verify their own data, as well as verify
                their neighbors&apos; data. This way, community members became checks on one another,
                establishing a distributed verification layer that the system alone could not
                provide. We also developed a formal dispute resolution process, ensuring that
                contested records had a path to resolution rather than becoming permanent errors in
                the dataset.
              </p>
            </CaseBody>
          </CaseText>
          <CaseTwoUp>
            <CaseFigure
              src={imgEditBoundary}
              alt="Tablet screen showing boundary editing with draggable nodes on a map"
              caption="Workers can adjust parcel boundaries using draggable nodes directly on the map,
                allowing for precise land demarcation, which was previously done on paper, to be
                executed with a single tap."
            />
            <CaseFigure
              src={imgDisputes}
              alt="Tablet screen showing a list of unresolved and resolved disputes"
              caption="Contested records are tracked as unresolved or resolved disputes, complete with
                timestamps and comments. The dispute flow provided community members with a formal
                method to challenge inaccurate data, preventing persistent errors in the system."
            />
          </CaseTwoUp>
        </CaseSection>

        {/* Section 8 — Two Interfaces, One Data Model */}
        <CaseSection>
          <CaseText heading="Two interfaces, one data model">
            <CaseBody>
              <p>
                The web interface was designed for government administrators managing the process at
                scale — a fundamentally different context from the field. While the tablet stripped
                everything back to single questions and large tap targets, the web interface revealed
                the full complexity of a land record.
              </p>
            </CaseBody>
          </CaseText>
          <CaseFigure
            variant="wide"
            src={imgWebRecord}
            alt="Web interface showing the full land record view for a government administrator"
            caption="The web interface displays all aspects of a land record — ownership details,
              encumbrances, supporting documents, and disputes — which were intentionally omitted
              from the tablet experience. Two interfaces, two audiences, one data model."
          />
        </CaseSection>

        {/* Section 9 — The Outcome */}
        <CaseSection>
          <CaseText label="The outcome">
            <CaseBody>
              <p>
                The prototype was presented to the Ministry of Natural Lands and Resources in the
                summer of 2020, and it received approval. Enum was launched in time for the 2021
                census, allowing tens of thousands of households across the six districts of Lusaka
                Province to be recorded using the system, with additional provinces set to follow.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

        {/* Section 10 — Reflection */}
        <CaseSection>
          <CaseText label="What I'd do differently">
            <CaseBody>
              <p>
                This project progressed rapidly, and I was focused on the work at hand. In
                hindsight, I would prioritize executive alignment more deliberately — not just at
                key milestones, but as an ongoing practice. Even the most technically sound design
                needs organizational support to be implemented smoothly, and that support is a
                relationship that should be cultivated in advance.
              </p>
            </CaseBody>
          </CaseText>
        </CaseSection>

      </div>
    </main>
  )
}
