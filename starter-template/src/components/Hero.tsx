export default function Hero() {
  return (
    <section className="section flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl space-y-6 animate-fade-in">
        <h1 className="text-display-xl font-display">
          Build with AJ STUDIOZ Design System
        </h1>
        <p className="text-body-lg text-secondary max-w-xl mx-auto">
          A complete Vite starter template with Manus-inspired monochrome design, premium typography, and dark mode support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="btn btn-primary">
            Explore Features
          </button>
          <button className="btn btn-secondary">
            View Documentation
          </button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="brand-card project-card-surface h-80 bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
          <p className="text-body-sm text-muted">Your hero image or illustration here</p>
        </div>
      </div>
    </section>
  )
}
