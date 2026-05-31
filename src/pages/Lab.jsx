import LabCard from '../components/LabCard'
import { labItems } from '../data/lab'
import '../styles/pages/Lab.css'

export default function Lab() {
  return (
    <main className="lab-page">
      <div className="container">
        <header className="lab-page__header">
          <h1 className="display-lg">Lab</h1>
          <p className="lab-page__desc">
            A living sketchbook of experiments, prototypes, and AI explorations.
          </p>
        </header>

        <div className="lab-masonry" aria-label="Lab entries">
          {labItems.map((item) => (
            <LabCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  )
}
