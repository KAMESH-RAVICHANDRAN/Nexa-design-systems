import { Check } from 'lucide-react'

const FEATURES = [
  {
    title: 'Monochrome First',
    description: 'Manus-inspired black/white/gray palette for premium aesthetic',
  },
  {
    title: 'Premium Typography',
    description: 'Libre Baskerville + DM Sans with complete type scale',
  },
  {
    title: 'Dark Mode',
    description: 'Full dark mode support with localStorage persistence',
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first approach with Tailwind CSS breakpoints',
  },
  {
    title: 'Animation Ready',
    description: 'Pre-configured motion tokens and smooth transitions',
  },
  {
    title: 'Accessible',
    description: 'WCAG AA contrast compliance and semantic HTML',
  },
]

export default function Features() {
  return (
    <section id="features" className="section py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg font-display mb-4">
            Complete Design System Included
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Everything you need to build modern, brand-consistent products with AJ STUDIOZ design principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="brand-card animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-heading-sm font-display mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
