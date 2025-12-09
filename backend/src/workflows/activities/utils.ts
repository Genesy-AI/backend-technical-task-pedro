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
  if (!lead.email) {
    throw new Error('Lead email is required')
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/orionConnect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-auth-me': 'mySecretKey123' },
    body: JSON.stringify({
      fullName: `${lead.firstName} ${lead.lastName}`,
      companyWebsite: lead.email.split('@')[1],
    }),
  })

  const res = await response.json()

  console.log('findPhoneActivity response:', res)

  return response ? res : null
}

export async function findPhoneByEmail(lead: LeadFindPhoneReqBody) {
  if (!lead.email) {
    throw new Error('Lead email is required')
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/astraDialer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apiKey: '1234jhgf' },
    body: JSON.stringify({
      email: lead.email,
    }),
  })

  const res = await response.json()

  console.log('findPhoneActivity response:', res)

  return response ? res : null
}

export async function findPhoneByEmailAndJobTitle(lead: LeadFindPhoneReqBody) {
  if (!(lead.email && lead.jobTitle)) {
    throw new Error('Lead email is required')
  }

  const response = await fetch('https://api.genesy.ai/api/tmp/numbusLookup?api=000099998888', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: lead.email,
      jobTitle: lead.jobTitle,
    }),
  })

  const res = await response.json()

  console.log('findPhoneActivity response:', res)

  return response ? res : null
}
