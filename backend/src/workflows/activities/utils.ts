import { LeadFindPhoneReqBody } from 'src/types/Leads'

export async function verifyEmail(email: string): Promise<boolean> {
  if (email.includes('john.doe')) {
    return false
  }

  if (/\+/.test(email)) {
    return false
  }

  return true
}

export async function findPhoneByNameAndCompanyWebsite(lead: LeadFindPhoneReqBody) {
  if (!(lead.firstName && lead.lastName && lead.email)) {
    console.warn(
      'Insufficient data for Orion Connect provider - first name, last name and email are required'
    )
    return null
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/orionConnect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-auth-me': 'mySecretKey123' },
    body: JSON.stringify({
      fullName: `${lead.firstName} ${lead.lastName}`,
      companyWebsite: lead.email.split('@')[1],
    }),
  })

  if (!response.ok) {
    console.warn(
      `Orion Connect provider returned ${response.status}: ${response.statusText} - leadId ${lead.id}`
    )
    return null
  }

  return response.json()
}

export async function findPhoneByEmail(lead: LeadFindPhoneReqBody) {
  if (!lead.email) {
    console.warn('Insufficient data for Astra Dialer provider - email is required')
    return null
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/astraDialer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apiKey: '1234jhgf' },
    body: JSON.stringify({
      email: lead.email,
    }),
  })

  if (!response.ok) {
    console.warn(
      `Astra Dialer provider returned ${response.status}: ${response.statusText} - leadId ${lead.id}`
    )
    return null
  }

  return response.json()
}

export async function findPhoneByEmailAndJobTitle(lead: LeadFindPhoneReqBody) {
  if (!(lead.email && lead.jobTitle)) {
    console.warn('Insufficient data for Numbus Lookup provider - email and job title are required')
    return null
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/numbusLookup?api=000099998888', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: lead.email,
      jobTitle: lead.jobTitle,
    }),
  })

  if (!response.ok) {
    console.warn(
      `Numbus Lookup provider returned ${response.status}: ${response.statusText} - leadId ${lead.id}`
    )
    return null
  }

  return response.json()
}
