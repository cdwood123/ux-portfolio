import CaseStudyHero from '../components/CaseStudyHero'
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
    <main className="enum-page">
      <CaseStudyHero
        title="Enum"
        hook="Bringing land rights into the digital age for 17 million Zambians"
        company="Medici Land Governance"
        role="Sole UX Designer"
        year="2019–2020"
        duration="Delivered 2021"
      />

      <div className="enum-outer">

        {/* Section 1 — Hero image */}
        <figure className="enum-figure enum-figure--hero">
          <img
            src={imgBoundarySelect}
            alt="Census worker selecting a parcel boundary on a tablet from satellite imagery"
            className="enum-img"
          />
          <figcaption className="caption enum-caption">
            Census workers select a parcel boundary from satellite imagery before beginning data
            collection. Designed for use in the field, on consumer Android hardware, without a
            reliable data connection.
          </figcaption>
        </figure>

        {/* Section 2 — The Stakes */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">The stakes</p>
            <div className="enum-section__body">
              <p>
                In Zambia, a missing or disputed land title isn't a paperwork inconvenience — it
                can mean losing your home, your farm, or your family's generational wealth with no
                legal recourse. The government's enumeration process — the systematic door-to-door
                collection of landowner information — was the gateway to formal property titles for
                over 17 million people. And it was running on paper, tribal knowledge, and trust
                that the data coming back from the field was accurate.
              </p>
              <p>It wasn't always.</p>
            </div>
          </div>
        </section>

        {/* Section 3 — The Problem */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">The problem</p>
            <div className="enum-section__body">
              <p>
                A test project in 2018 revealed two critical failures. First, there was no data
                validation — census workers could input anything, it was treated as truth, and
                months of cleanup work followed. Second, there was no shared picture of the overall
                process — not internally at Medici, not across the Zambian government agencies
                involved. Everyone understood their own piece. Nobody held the whole map.
              </p>
              <p>
                When I started discovery, the word I heard most often was <em>murky.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — My Role */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">My role</p>
            <div className="enum-section__body">
              <p>
                I was the sole designer on a cross-functional team working directly with the Zambian
                government, from field-level census workers up to members of parliament at the
                Ministry of Natural Lands and Resources. I owned research, information architecture,
                wireframes, and the final Figma prototype presented to the Ministry for approval.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Making the Invisible Visible */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">The process</p>
            <h2 className="enum-subheading">Making the invisible visible</h2>
            <div className="enum-section__body">
              <p>
                The first design challenge wasn't a screen — it was a shared understanding. Every
                stakeholder I interviewed knew their own responsibilities clearly, but no one could
                describe the full process end to end. Institutional knowledge was scattered across
                people's heads, sticky notes, and disconnected documents.
              </p>
              <p>
                I built a series of story maps to surface and consolidate that knowledge — migrating
                tools as understanding evolved — until we had one artifact everyone could point to.
                That story map became the foundation every subsequent design decision was built on.
              </p>
            </div>
            <blockquote className="enum-blockquote">
              <p>
                "Shoutout to Charles for putting everything into the Whimsical file. I can't tell
                you how invaluable that's been. It makes it even more imperative that we have
                meetings like this to capture rich data."
              </p>
              <p className="caption enum-blockquote__attribution">— Martin, GIS Team</p>
            </blockquote>
          </div>
          <figure className="enum-figure enum-figure--wide">
            <img
              src={imgStoryMap}
              alt="End-to-end enumeration process story map built during discovery"
              className="enum-img"
            />
            <figcaption className="caption enum-caption">
              One stage of the end-to-end process map built during discovery. No single stakeholder
              could describe the full enumeration process — this artifact became the shared source of
              truth for the entire team.
            </figcaption>
          </figure>
        </section>

        {/* Section 6 — Designing for the Field */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <h2 className="enum-subheading">Designing for the field</h2>
            <div className="enum-section__body">
              <p>
                The tablet interface had to work for census workers collecting data door-to-door
                under real constraints: users who could read but might not know how to sign their
                name or read a map. Unreliable or nonexistent connectivity. The pressure of moving
                through dozens of households in a day.
              </p>
              <p>
                The product couldn't rely on a live connection — data had to be stored locally on
                the device and synced when workers returned to the office. Every interaction had to
                be operable without technical fluency, and every input had to be designed knowing a
                human being under time pressure was making it.
              </p>
            </div>
          </div>
          <div className="enum-2up">
            <figure className="enum-figure">
              <img
                src={imgOwnership}
                alt="Tablet screen showing the first question: who owns this land?"
                className="enum-img"
              />
              <figcaption className="caption enum-caption">
                The first question in every new record. Radical simplicity was a deliberate
                constraint — every screen had to work under time pressure, in the field, with no
                room for confusion.
              </figcaption>
            </figure>
            <figure className="enum-figure">
              <img
                src={imgPlotInfo}
                alt="Tablet screen showing the Plot Info address form"
                className="enum-img"
              />
              <figcaption className="caption enum-caption">
                Plain-language questions, one at a time. The form pattern was designed for users who
                could read but may have limited experience with digital interfaces or formal
                documents.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section 7 — Building a System That Checks Itself */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <h2 className="enum-subheading">Building a system that checks itself</h2>
            <div className="enum-section__body">
              <p>
                The core data integrity problem from the 2018 test project was that human input was
                treated as ground truth. Our solution reframed validation as a social mechanism:
                each person could review and verify their own data, and — critically — verify their
                neighbors' data too. Community members became a check on each other, creating a
                distributed verification layer that the system alone couldn't provide.
              </p>
              <p>
                We also built a formal dispute resolution flow, so contested records had a path to
                resolution rather than becoming permanent errors in the dataset.
              </p>
            </div>
          </div>
          <div className="enum-2up">
            <figure className="enum-figure">
              <img
                src={imgEditBoundary}
                alt="Tablet screen showing boundary editing with draggable nodes on a map"
                className="enum-img"
              />
              <figcaption className="caption enum-caption">
                Workers can adjust parcel boundaries using draggable nodes directly on the map.
                Precision land demarcation — previously done on paper — in a single tap interaction.
              </figcaption>
            </figure>
            <figure className="enum-figure">
              <img
                src={imgDisputes}
                alt="Tablet screen showing a list of unresolved and resolved disputes"
                className="enum-img"
              />
              <figcaption className="caption enum-caption">
                Contested records are tracked as unresolved or resolved disputes, with timestamps
                and comments. The dispute flow gave community members a formal path to challenge
                inaccurate data rather than leaving errors in the system permanently.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section 8 — Two Interfaces, One Data Model */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <h2 className="enum-subheading">Two interfaces, one data model</h2>
            <div className="enum-section__body">
              <p>
                The web interface was built for government administrators managing the process at
                scale — a fundamentally different context from the field. Where the tablet stripped
                everything back to single questions and large tap targets, the web surface exposed
                the full complexity of a land record.
              </p>
            </div>
          </div>
          <figure className="enum-figure enum-figure--wide">
            <img
              src={imgWebRecord}
              alt="Web interface showing the full land record view for a government administrator"
              className="enum-img"
            />
            <figcaption className="caption enum-caption">
              The web interface surfaces the full complexity of a land record — ownership details,
              encumbrances, supporting documents, disputes — that was deliberately abstracted away
              from the tablet experience. Two interfaces, two audiences, one data model.
            </figcaption>
          </figure>
        </section>

        {/* Section 9 — The Outcome */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">The outcome</p>
            <div className="enum-section__body">
              <p>
                The prototype was presented to the Ministry of Natural Lands and Resources in summer
                2020. They approved it.
              </p>
              <p>
                Enum was deployed in time for the 2021 census. Tens of thousands of households
                across the 6 districts of Lusaka Province were recorded using the system — with
                additional provinces to follow.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10 — Reflection */}
        <section className="enum-section">
          <div className="enum-text-wrap">
            <p className="enum-section__label label-upper">What I'd do differently</p>
            <div className="enum-section__body">
              <p>
                This project moved fast, and I was focused on the work. In hindsight I'd invest
                more deliberately in executive alignment — not just at key milestones, but as an
                ongoing practice. The most technically sound design still needs organizational
                buy-in to ship smoothly, and that's a relationship you build before you need it.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
