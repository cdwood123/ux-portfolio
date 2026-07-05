import { useState } from 'react'
import WorkCard from '../components/WorkCard'
import { workItems, filterCategories } from '../data/work'
import '../styles/pages/Work.css'

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? workItems
      : workItems.filter((item) => item.categories.includes(activeFilter))

  return (
    <main className="work-page">
      <div className="container">
        <header className="work-page__header">
          <h1 className="display-lg">Selected work</h1>
          <p className="work-page__desc">
            A decade of shipping data products, from 0-to-1 definitions to mature design systems.
          </p>
        </header>

        <nav
          className="filter-chips"
          aria-label="Filter work by category"
          role="tablist"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-chip${activeFilter === cat ? ' filter-chip--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="work-grid" role="list" aria-label="Case studies">
          {filtered.map((item) => (
            <div key={item.slug} role="listitem">
              <WorkCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
