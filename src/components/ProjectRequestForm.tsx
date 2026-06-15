'use client'

import { useState, useCallback } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  scope: string
}

const initial: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  scope: '',
}

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Automation / Integration',
  'Site Migration / Rebuild',
]

const budgets = ['$10k – $25k', '$25k – $50k', '$50k+']

const timelines = [
  'ASAP (under 4 weeks)',
  '4 – 8 weeks',
  '8 – 16 weeks',
  '16+ weeks / Ongoing',
  'Flexible — quality over speed',
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

      {/* ── Row 1: Name + Email ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="prf-name"
          label="Full Name"
          name="name"
          type="text"
          placeholder="Alex Johnson"
          value={form.name}
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

      {/* ── Row 2: Company + Phone ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="prf-company"
          label="Company / Brand"
          name="company"
          type="text"
          placeholder="Acme Corp"
          value={form.company}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <InputField
          id="prf-phone"
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={form.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* ── Row 3: Project Type + Budget ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          id="prf-projectType"
          label="Project Type"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          options={projectTypes}
          required
          disabled={isSubmitting}
        />
        <SelectField
          id="prf-budget"
          label="Estimated Budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          options={budgets}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* ── Row 4: Timeline (full width) ── */}
      <SelectField
        id="prf-timeline"
        label="Target Timeline"
        name="timeline"
        value={form.timeline}
        onChange={handleChange}
        options={timelines}
        required
        disabled={isSubmitting}
      />

      {/* ── Row 5: Detailed scope textarea ── */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="prf-scope"
          className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
        >
          Detailed Scope{' '}
          <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="prf-scope"
          name="scope"
          rows={6}
          value={form.scope}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Describe your project in as much detail as possible — current pain points, desired features, integrations needed, and what success looks like. The more detail, the faster we can architect a solution."
          className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
        />
        <p className="text-xs text-zinc-700 mt-0.5">
          Minimum 50 characters recommended for accurate scoping.
        </p>
      </div>

      {/* ── Retainer notice ── */}
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-xs text-zinc-500 leading-relaxed">
        <span className="text-blue-400 font-semibold">Note:</span> All custom
        builds require enrollment in our{' '}
        <span className="text-zinc-300 font-medium">
          Zero-Maintenance Retainer
        </span>{' '}
        post-launch to ensure peak performance and security. Your architect will
        walk you through the options.
      </div>

      {/* ── Submit ── */}
      <button
        id="project-request-submit"
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-900/40 mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Transmitting Scope...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Scope for Review
          </>
        )}
      </button>

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
          Select...
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
