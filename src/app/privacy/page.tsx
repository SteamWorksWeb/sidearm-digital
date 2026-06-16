import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sidearm Digital LLC',
  description: 'Read the Privacy Policy for Sidearm Digital LLC web application development services.',
}

export default function PrivacyPage() {
  const year = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 mb-8 group"
          >
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Last updated: June 1, {year}</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* Intro */}
          <section>
            <p className="text-zinc-400">
              Sidearm Digital LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read it carefully.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="text-zinc-400 mb-3">We may collect the following types of information:</p>
            <h3 className="text-sm font-semibold text-zinc-300 mb-2">Personal Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2 mb-4">
              <li>Name, email address, and phone number when you contact us or submit a project request.</li>
              <li>Business name, website URL, and project details you share in forms or communications.</li>
              <li>Payment information (processed securely through third-party payment processors — we do not store card numbers).</li>
            </ul>
            <h3 className="text-sm font-semibold text-zinc-300 mb-2">Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
              <li>Log data such as IP address, browser type, pages visited, and time spent on pages.</li>
              <li>Cookies and similar tracking technologies to understand how visitors use our website.</li>
              <li>Referral URLs and device information.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p className="text-zinc-400 mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Process transactions and send related invoices or receipts.</li>
              <li>Communicate project updates, timelines, and deliverables.</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Send occasional marketing emails if you have opted in (you may opt out at any time).</li>
              <li>Comply with legal obligations and resolve disputes.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Cookies</h2>
            <p className="text-zinc-400 mb-3">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather analytics data. You can control cookie settings through your browser. Disabling cookies may affect some functionality of our website.
            </p>
            <p className="text-zinc-400">
              We may use third-party analytics services (such as Google Analytics) that set their own cookies. These services collect information in aggregate and do not identify you personally.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Sharing Your Information</h2>
            <p className="text-zinc-400 mb-3">We do not sell or rent your personal information. We may share information with:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
              <li>
                <strong className="text-zinc-300">Service Providers:</strong> Trusted third parties who assist us in operating our website and delivering services (e.g., hosting, payment processing, email delivery). They are contractually obligated to protect your data.
              </li>
              <li>
                <strong className="text-zinc-300">Legal Requirements:</strong> When required by law or to protect our rights, property, or safety, or that of others.
              </li>
              <li>
                <strong className="text-zinc-300">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data Retention</h2>
            <p className="text-zinc-400">
              We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. Project-related communications and files are typically retained for three (3) years after project completion.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Security</h2>
            <p className="text-zinc-400">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights</h2>
            <p className="text-zinc-400 mb-3">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal information (subject to certain exceptions).</li>
              <li>The right to opt out of marketing communications at any time.</li>
              <li>The right to data portability where applicable.</li>
            </ul>
            <p className="text-zinc-400 mt-3">
              To exercise any of these rights, please{' '}
              <Link href="/contact" className="text-blue-500 hover:text-blue-400 transition-colors duration-150">
                contact us
              </Link>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Third-Party Links</h2>
            <p className="text-zinc-400">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-zinc-400">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p className="text-zinc-400">
              We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact Us</h2>
            <p className="text-zinc-400">
              If you have questions or concerns about this Privacy Policy or our data practices, please{' '}
              <Link href="/contact" className="text-blue-500 hover:text-blue-400 transition-colors duration-150">
                contact us
              </Link>
              . We are committed to addressing your concerns promptly.
            </p>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-wrap gap-6">
          <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150">
            Terms of Service
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
