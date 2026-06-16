'use client'

import { useState, useCallback } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  company: string
  projectType: string
  hasWebsite: string
  websiteUrl: string
  budget: string
  details: string
}

const initial: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  projectType: '',
  hasWebsite: '',
  websiteUrl: '',
  budget: '',
  details: '',
}

const projectTypes = [
  'Web Design',
  'Web Application',
  'Mobile App',
  'Automation / Integration',
  'Site Migration / Rebuild',
  'Other',
]

const budgets = [
  'Under $10,000',
  '$10,000 – $20,000',
  '$20,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
]

export default function ProjectRequestForm() {
  const [form, setForm] = useState<FormData>(initial)
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
        const recaptchaToken = await executeRecaptcha('start_submit')
        const res = await fetch('/api/start', {
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

  /* ── Success ── */
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-6 py-16 px-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-zinc-900/60 to-zinc-950 min-h-[520px]">
        <div className="h-16 w-16 rounded-full border border-blue-500/40 bg-blue-600/20 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-blue-400" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-widest text-blue-400 uppercase">
            Scope Received
          </p>
          <h3 className="text-2xl font-black text-white leading-tight">
            Your mission is in review.
          </h3>
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            Our lead architect will review your requirements and initiate
            contact within 24 hours. Prepare to talk architecture.
          </p>
        </div>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
          <p className="text-sm text-red-300">
            {errorMsg || 'Transmission failed. Please try again or contact us directly.'}
          </p>
        </div>
      )}

      {/* ── Row 1: First + Last Name ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="prf-firstName"
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Alex"
          value={form.firstName}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <InputField
          id="prf-lastName"
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Johnson"
          value={form.lastName}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* ── Row 2: Phone + Email ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="prf-phone"
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={form.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <InputField
          id="prf-email"
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

      {/* ── Row 3: Company (full width) ── */}
      <InputField
        id="prf-company"
        label="Business Name"
        name="company"
        type="text"
        placeholder="Acme Corp"
        value={form.company}
        onChange={handleChange}
        disabled={isSubmitting}
      />

      {/* ── Row 4: Project Type ── */}
      <SelectField
        id="prf-projectType"
        label="What type of project are you looking for?"
        name="projectType"
        value={form.projectType}
        onChange={handleChange}
        options={projectTypes}
        required
        disabled={isSubmitting}
      />

      {/* ── Row 5: Existing website radio ── */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Do you have a website now? <span className="text-blue-500">*</span>
        </p>
        <div className="flex items-center gap-6">
          {['Yes', 'No'].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="radio"
                name="hasWebsite"
                value={opt}
                checked={form.hasWebsite === opt}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
              />
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-150">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* ── Conditional: Current website URL ── */}
      {form.hasWebsite === 'Yes' && (
        <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <label
            htmlFor="prf-websiteUrl"
            className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
          >
            Current Website URL <span className="text-blue-500">*</span>
          </label>
          <input
            id="prf-websiteUrl"
            name="websiteUrl"
            type="url"
            placeholder="https://yourwebsite.com"
            value={form.websiteUrl}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
          />
        </div>
      )}
      <SelectField
        id="prf-budget"
        label="What is your expected budget?"
        name="budget"
        value={form.budget}
        onChange={handleChange}
        options={budgets}
        required
        disabled={isSubmitting}
      />

      {/* ── Row 7: Project details ── */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="prf-details"
          className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
        >
          Any other info you&apos;d like to share about your project
        </label>
        <textarea
          id="prf-details"
          name="details"
          rows={5}
          value={form.details}
          onChange={handleChange}
          disabled={isSubmitting}
          placeholder="Tell us about your goals, timeline, any specific features you need, or anything else that would help us understand your project…"
          className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
        />
      </div>

      {/* ── Submit ── */}
      <button
        id="project-request-submit"
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-900/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 shadow-lg shadow-blue-900/40 mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Request →
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-600">
        We&apos;ll respond within 24 hours. No spam, ever.
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
function InputField({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: {
  id: string
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
        htmlFor={id}
        className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
      >
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={id}
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
  id,
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
}: {
  id: string
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
        htmlFor={id}
        className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
      >
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50 appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select an option…
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
