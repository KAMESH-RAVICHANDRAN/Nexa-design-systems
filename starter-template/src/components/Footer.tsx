export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* CTA Section */}
        <div className="mb-16 pb-16 border-b site-footer-border">
          <h2 className="text-heading mb-4">Ready to get started?</h2>
          <button className="btn site-footer-inverse-pill">
            Get in Touch
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-heading-sm font-display mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-heading-sm font-display mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-heading-sm font-display mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="nav-link site-footer-muted hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-heading-sm font-display mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border site-footer-border flex items-center justify-center hover:text-white site-footer-muted transition-colors">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border site-footer-border flex items-center justify-center hover:text-white site-footer-muted transition-colors">
                Github
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border site-footer-border flex items-center justify-center hover:text-white site-footer-muted transition-colors">
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t site-footer-border">
          <a href="/" className="wordmark mb-4 sm:mb-0">
            aj studioz
          </a>
          <p className="text-body-sm site-footer-muted">
            © 2024 AJ STUDIOZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
