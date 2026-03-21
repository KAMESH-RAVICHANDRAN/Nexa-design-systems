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
        
        <div className="bg-card border border-border rounded-lg p-6 my-8">
          <div className="mb-3 flex items-center justify-center gap-3">
            <img src="/AJ.svg" alt="AJ logo" className="h-7 w-7 rounded-md object-contain" />
            <p className="text-body font-display">Vite X AJ STUDIOZ Starter Template</p>
          </div>
          <p className="text-body-sm text-secondary mb-4">
            Start editing <code className="bg-muted/20 px-2 py-1 rounded text-sm">src/components/</code> or <code className="bg-muted/20 px-2 py-1 rounded text-sm">src/App.tsx</code> to build your own projects!
          </p>
          <p className="text-caption text-muted">
            All design system tokens, colors, typography, animations, and dark mode are pre-configured and ready to use.
          </p>
        </div>

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
