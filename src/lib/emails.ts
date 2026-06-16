const LOGO_URL = 'https://sidearm-digital.vercel.app/sidearmLogo.png'
const SITE_URL = 'https://sidearmdigital.com'

/* ─── Shared styles ─── */
const s = {
  body: 'margin:0;padding:0;background-color:#09090b;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased',
  wrapper: 'background-color:#09090b;padding:48px 20px',
  card: 'background:#18181b;border:1px solid #27272a;border-radius:12px;overflow:hidden;max-width:600px;width:100%',
  headerCell: 'background:#09090b;padding:32px 40px;border-bottom:2px solid #3b82f6;text-align:center',
  alertCell: 'background:linear-gradient(135deg,#1e3a5f,#1e2d4f);padding:14px 40px;border-bottom:1px solid #1d4ed8',
  bodyCell: 'padding:40px',
  footerCell: 'background:#09090b;padding:24px 40px;text-align:center;border-top:1px solid #27272a',
  h1: 'margin:0 0 8px;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.02em',
  subtitle: 'margin:0 0 32px;color:#52525b;font-size:13px',
  fieldLabel: 'margin:0 0 4px;color:#52525b;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase',
  fieldValue: 'margin:0;color:#e4e4e7;font-size:15px;font-weight:500;line-height:1.5',
  fieldRow: 'padding:14px 0;border-bottom:1px solid #27272a',
  fieldRowLast: 'padding:14px 0',
  btn: 'display:inline-block;background:#2563eb;color:#ffffff;padding:13px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.01em',
  footerText: 'margin:0;color:#3f3f46;font-size:12px;line-height:1.6',
  footerLink: 'color:#3b82f6;text-decoration:none',
}

function field(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="${last ? s.fieldRowLast : s.fieldRow}">
        <p style="${s.fieldLabel}">${label}</p>
        <p style="${s.fieldValue}">${value || '—'}</p>
      </td>
    </tr>`
}

/* ══════════════════════════════════════════════
   CONTACT FORM — Internal notification
   From:    no-reply@sidearmdigital.com
   To:      info@sidearmdigital.com
   ReplyTo: submitter email
══════════════════════════════════════════════ */
export function contactInternalEmail(data: {
  name: string
  email: string
  phone: string
  projectType: string
  details: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Contact Form Submission</title></head>
<body style="${s.body}">
<table width="100%" cellpadding="0" cellspacing="0" style="${s.wrapper}">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="${s.card}">
      <tr><td style="${s.headerCell}">
        <img src="${LOGO_URL}" alt="Sidearm Digital" width="150" height="auto" style="display:block;margin:0 auto;max-width:150px">
      </td></tr>
      <tr><td style="${s.alertCell}">
        <p style="margin:0;color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">⚡ &nbsp;New Inquiry — Contact Form</p>
      </td></tr>
      <tr><td style="${s.bodyCell}">
        <h1 style="${s.h1}">New Contact Submission</h1>
        <p style="${s.subtitle}">Received via sidearmdigital.com/contact</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${field('Full Name', data.name)}
          ${field('Email Address', `<a href="mailto:${data.email}" style="color:#60a5fa;text-decoration:none">${data.email}</a>`)}
          ${field('Phone', data.phone || 'Not provided')}
          ${field('Project Type', data.projectType)}
          ${field('Project Details', data.details.replace(/\n/g, '<br>'), true)}
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px">
          <tr><td><a href="mailto:${data.email}" style="${s.btn}">Reply to ${data.name} &rarr;</a></td></tr>
        </table>
      </td></tr>
      <tr><td style="${s.footerCell}">
        <p style="${s.footerText}">Automated notification &bull; <a href="${SITE_URL}" style="${s.footerLink}">sidearmdigital.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

/* ══════════════════════════════════════════════
   CONTACT FORM — User confirmation
   From:    no-reply@sidearmdigital.com
   To:      submitter email
   ReplyTo: info@sidearmdigital.com
══════════════════════════════════════════════ */
export function contactConfirmationEmail(data: { name: string }) {
  const firstName = data.name.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>We received your inquiry</title></head>
<body style="${s.body}">
<table width="100%" cellpadding="0" cellspacing="0" style="${s.wrapper}">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="${s.card}">
      <tr><td style="${s.headerCell}">
        <img src="${LOGO_URL}" alt="Sidearm Digital" width="150" height="auto" style="display:block;margin:0 auto;max-width:150px">
      </td></tr>
      <tr><td style="background:linear-gradient(135deg,#14532d,#166534);padding:14px 40px;border-bottom:1px solid #15803d">
        <p style="margin:0;color:#86efac;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">✓ &nbsp;Inquiry Received</p>
      </td></tr>
      <tr><td style="${s.bodyCell}">
        <h1 style="${s.h1}">Thank you, ${firstName}.</h1>
        <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;line-height:1.7">
          We've received your message and a member of our team will respond personally.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;border:1px solid #27272a;border-radius:8px;margin:0 0 32px">
          <tr><td style="padding:24px 28px">
            <p style="margin:0 0 16px;color:#60a5fa;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">What happens next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">01</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">Your submission is reviewed by our lead architect — not a sales rep.</p></td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">02</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">You receive a direct, thoughtful response within <strong style="color:#e4e4e7">24 hours</strong>.</p></td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">03</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">We schedule a focused discovery session — no generic pitch decks.</p></td>
              </tr>
            </table>
          </td></tr>
        </table>
        <p style="margin:0 0 28px;color:#52525b;font-size:13px;line-height:1.6">
          If your inquiry is time-sensitive, reply directly to this email or reach us at <a href="mailto:info@sidearmdigital.com" style="color:#60a5fa;text-decoration:none">info@sidearmdigital.com</a>.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td><a href="${SITE_URL}/services" style="${s.btn}">View Our Services &rarr;</a></td></tr>
        </table>
      </td></tr>
      <tr><td style="${s.footerCell}">
        <p style="${s.footerText}">
          Sidearm Digital &bull; <a href="${SITE_URL}" style="${s.footerLink}">sidearmdigital.com</a><br>
          <span style="color:#27272a">You're receiving this because you submitted an inquiry on our website.</span>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

/* ══════════════════════════════════════════════
   START FORM — Internal notification
   From:    no-reply@sidearmdigital.com
   To:      info@sidearmdigital.com
   ReplyTo: submitter email
══════════════════════════════════════════════ */
export function startInternalEmail(data: {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  hasWebsite: string
  budget: string
  details: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Project Request</title></head>
<body style="${s.body}">
<table width="100%" cellpadding="0" cellspacing="0" style="${s.wrapper}">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="${s.card}">
      <tr><td style="${s.headerCell}">
        <img src="${LOGO_URL}" alt="Sidearm Digital" width="150" height="auto" style="display:block;margin:0 auto;max-width:150px">
      </td></tr>
      <tr><td style="${s.alertCell}">
        <p style="margin:0;color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">🚀 &nbsp;New Project Request — /start</p>
      </td></tr>
      <tr><td style="${s.bodyCell}">
        <h1 style="${s.h1}">New Project Request Submitted</h1>
        <p style="${s.subtitle}">Received via sidearmdigital.com/start</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${field('Full Name', data.name)}
          ${field('Email Address', `<a href="mailto:${data.email}" style="color:#60a5fa;text-decoration:none">${data.email}</a>`)}
          ${field('Phone', data.phone)}
          ${field('Business Name', data.company || 'Not provided')}
          ${field('Project Type', data.projectType)}
          ${field('Has Existing Website', data.hasWebsite)}
          ${field('Expected Budget', data.budget)}
          ${field('Additional Info', data.details ? data.details.replace(/\n/g, '<br>') : 'None provided', true)}
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px">
          <tr><td><a href="mailto:${data.email}" style="${s.btn}">Reply to ${data.name} &rarr;</a></td></tr>
        </table>
      </td></tr>
      <tr><td style="${s.footerCell}">
        <p style="${s.footerText}">Automated notification &bull; <a href="${SITE_URL}" style="${s.footerLink}">sidearmdigital.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

/* ══════════════════════════════════════════════
   START FORM — User confirmation
   From:    no-reply@sidearmdigital.com
   To:      submitter email
   ReplyTo: info@sidearmdigital.com
══════════════════════════════════════════════ */
export function startConfirmationEmail(data: { name: string; projectType: string; budget: string }) {
  const firstName = data.name.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Your project request is in review</title></head>
<body style="${s.body}">
<table width="100%" cellpadding="0" cellspacing="0" style="${s.wrapper}">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="${s.card}">
      <tr><td style="${s.headerCell}">
        <img src="${LOGO_URL}" alt="Sidearm Digital" width="150" height="auto" style="display:block;margin:0 auto;max-width:150px">
      </td></tr>
      <tr><td style="background:linear-gradient(135deg,#14532d,#166534);padding:14px 40px;border-bottom:1px solid #15803d">
        <p style="margin:0;color:#86efac;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">✓ &nbsp;Request Received — Under Review</p>
      </td></tr>
      <tr><td style="${s.bodyCell}">
        <h1 style="${s.h1}">Your request is in review, ${firstName}.</h1>
        <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;line-height:1.7">
          We've received your project request for <strong style="color:#e4e4e7">${data.projectType}</strong>. Our lead architect will review it personally and reach out within 24 hours — no call-center handoff.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;border:1px solid #27272a;border-radius:8px;margin:0 0 28px">
          <tr><td style="padding:20px 28px;border-bottom:1px solid #27272a">
            <p style="margin:0;color:#60a5fa;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">Request Summary</p>
          </td></tr>
          <tr><td style="padding:20px 28px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;width:130px"><p style="margin:0;color:#52525b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em">Project Type</p></td>
                <td style="padding:6px 0"><p style="margin:0;color:#e4e4e7;font-size:13px">${data.projectType}</p></td>
              </tr>
              <tr>
                <td style="padding:6px 0"><p style="margin:0;color:#52525b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em">Budget</p></td>
                <td style="padding:6px 0"><p style="margin:0;color:#e4e4e7;font-size:13px">${data.budget}</p></td>
              </tr>
            </table>
          </td></tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;border:1px solid #27272a;border-radius:8px;margin:0 0 32px">
          <tr><td style="padding:24px 28px">
            <p style="margin:0 0 16px;color:#60a5fa;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">What happens next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">01</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">Our lead architect reviews your request — typically within <strong style="color:#e4e4e7">24 hours</strong>.</p></td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">02</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">You receive a direct response with preliminary thoughts and next steps.</p></td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:24px"><span style="color:#3b82f6;font-size:14px;font-weight:700">03</span></td>
                <td style="padding:8px 0 8px 12px"><p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5">We schedule a focused discovery session and begin drafting your Statement of Work.</p></td>
              </tr>
            </table>
          </td></tr>
        </table>
        <p style="margin:0 0 28px;color:#52525b;font-size:13px;line-height:1.6">
          Questions in the meantime? Reply to this email or reach us at <a href="mailto:info@sidearmdigital.com" style="color:#60a5fa;text-decoration:none">info@sidearmdigital.com</a>.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td><a href="${SITE_URL}/process" style="${s.btn}">View Our Process &rarr;</a></td></tr>
        </table>
      </td></tr>
      <tr><td style="${s.footerCell}">
        <p style="${s.footerText}">
          Sidearm Digital &bull; <a href="${SITE_URL}" style="${s.footerLink}">sidearmdigital.com</a><br>
          <span style="color:#27272a">You're receiving this because you submitted a project request on our website.</span>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}
