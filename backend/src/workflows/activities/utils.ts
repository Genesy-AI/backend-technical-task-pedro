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

export async function findPhoneActivity(lead: LeadFindPhoneReqBody) {
  if (!lead.email) {
    throw new Error('Lead email is required')
  }
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-auth-me': 'mySecretKey123' },
    body: JSON.stringify({
      fullName: `${lead.firstName} ${lead.lastName}`,
      companyWebsite: lead.email.split('@')[1],
    }),
  })

  console.log('Response: => ', response)

  return response.ok ? '123-456-7890' : null
}
