import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Sidearm Digital LLC',
  description: 'Read the Terms of Service for Sidearm Digital LLC web application development services.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-zinc-500">Last updated: June 1, {year}</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p className="text-zinc-400">
              By accessing or using the services provided by Sidearm Digital LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our services. These Terms apply to all clients, visitors, and users who access or use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Services</h2>
            <p className="text-zinc-400 mb-3">
              Sidearm Digital LLC provides custom web application development, design, and consulting services. The scope of services for each client is defined in a separate Statement of Work or project agreement signed by both parties.
            </p>
            <p className="text-zinc-400">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with reasonable notice where applicable.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Client Responsibilities</h2>
            <p className="text-zinc-400 mb-3">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-2">
              <li>Provide accurate, current, and complete information as required for the engagement.</li>
              <li>Respond to reasonable requests for feedback, approvals, and content in a timely manner.</li>
              <li>Ensure you have all necessary rights to any materials, trademarks, images, or content you supply to us.</li>
              <li>Pay all invoices in accordance with the agreed-upon payment schedule.</li>
              <li>Not use any deliverables for unlawful purposes.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Payment Terms</h2>
            <p className="text-zinc-400 mb-3">
              Payment terms are specified in your project agreement. Generally, a deposit is required before work begins. Remaining balances are due upon project milestones or completion as outlined in the agreement.
            </p>
            <p className="text-zinc-400">
              Late payments may incur a late fee of 1.5% per month on the outstanding balance. We reserve the right to pause or terminate work on your project in the event of non-payment.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p className="text-zinc-400 mb-3">
              Upon receipt of full payment, you will own the final deliverables produced specifically for your project. We retain ownership of all pre-existing tools, frameworks, libraries, methodologies, and general know-how used in the course of delivering services.
            </p>
            <p className="text-zinc-400">
              We reserve the right to display completed work in our portfolio unless you request in writing that we keep the project confidential.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Confidentiality</h2>
            <p className="text-zinc-400">
              Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation does not apply to information that becomes publicly known through no fault of the receiving party, or that was independently developed without reference to the confidential information.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p className="text-zinc-400 mb-3">
              To the fullest extent permitted by law, Sidearm Digital LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-zinc-400">
              Our total liability for any claim arising under these Terms shall not exceed the total fees paid by you to us in the three (3) months preceding the event giving rise to the claim.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Warranty Disclaimer</h2>
            <p className="text-zinc-400">
              Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be error-free or uninterrupted.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Termination</h2>
            <p className="text-zinc-400">
              Either party may terminate a project engagement with written notice as outlined in the project agreement. Upon termination, you agree to pay for all work completed up to the date of termination. We will deliver all completed work product upon receipt of final payment.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Governing Law</h2>
            <p className="text-zinc-400">
              These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be subject to binding arbitration.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Changes to These Terms</h2>
            <p className="text-zinc-400">
              We reserve the right to update these Terms at any time. We will notify active clients of material changes via email or by posting a notice on our website. Your continued use of our services after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">12. Contact</h2>
            <p className="text-zinc-400">
              If you have any questions about these Terms, please{' '}
              <Link href="/contact" className="text-blue-500 hover:text-blue-400 transition-colors duration-150">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-wrap gap-6">
          <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150">
            Privacy Policy
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
