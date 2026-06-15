'use client'

import { useState, useCallback } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormData = {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  details: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  details: '',
}

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'Automation / Integration',
  'Web Design',
  'Zero-Maintenance Retainer',
  'Consulting',
]

const budgets = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $30k',
  '$30k – $60k',
  '$60k+',
  'Let\'s discuss',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const { executeRecaptcha } = useGoogleReCaptcha()

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!executeRecaptcha) return
      setStatus('submitting')
      setErrorMsg('')

      try {
        const recaptchaToken = await executeRecaptcha('contact_submit')
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, recaptchaToken }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Submission failed.')
        setStatus('success')
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : 'Transmission failed.')
        setStatus('error')
      }
    },
    [executeRecaptcha, form]
  )

  /* ── Success state ── */
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-6 py-16 px-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-zinc-900/60 to-zinc-950 min-h-[480px]">
        <div className="h-16 w-16 rounded-full border border-blue-500/40 bg-blue-600/20 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-blue-400" />
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">
            Transmission Received
          </p>
          <h3 className="text-2xl font-black text-white leading-tight mb-3">
            We&apos;ve got your scope.
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-sm">
            Your submission has been received. A senior member of our team will review your inquiry and respond personally — no call-center handoff, no generic sales script.
          </p>
        </div>
      </div>
    )
  }

  /* ── Error state ── */
  const isError = status === 'error'
  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      {isError && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
          <p className="text-sm text-red-300">
            {errorMsg || 'Transmission failed. Please try again or email us directly.'}
          </p>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="Alex Johnson"
          value={form.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="alex@company.com"
          value={form.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Phone + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={form.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <SelectField
          label="Project Type"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          options={projectTypes}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Budget */}
      <SelectField
        label="Estimated Budget"
        name="budget"
        value={form.budget}
        onChange={handleChange}
        options={budgets}
        required
        disabled={isSubmitting}
      />

      {/* Project details */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="details"
          className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
        >
          Project Details <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={form.details}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Describe your project, your current pain points, and what success looks like for you..."
          className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
        />
      </div>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="group relative flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-900/40 overflow-hidden mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Project Inquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-700">
        No spam. No pressure. No generic discovery call. Just a direct, thoughtful response from our team.
      </p>

      <p className="text-center text-[11px] text-zinc-700 leading-relaxed">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-500">Privacy Policy</a>{' '}and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-500">Terms of Service</a>{' '}apply.
      </p>
    </form>
  )
}

/* ── Shared sub-components ── */
function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
      >
        {label}{' '}
        {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
}: {
  label: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  options: string[]
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
      >
        {label}{' '}
        {required && <span className="text-blue-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50 appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select an option...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-zinc-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
