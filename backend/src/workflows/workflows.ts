import { proxyActivities } from '@temporalio/workflow'
import type * as activities from './activities'
import { LeadFindPhoneReqBody } from 'src/types/Leads'

const { findPhoneByNameAndCompanyWebsite, findPhoneByEmail, findPhoneByEmailAndJobTitle, verifyEmail } =
  proxyActivities<typeof activities>({
    startToCloseTimeout: '10 second',
  })

export async function verifyEmailWorkflow(email: string): Promise<boolean> {
  return await verifyEmail(email)
}

export async function findPhoneWorkflow(lead: LeadFindPhoneReqBody): Promise<{ phone: string } | null> {
  // Try Provider One
  const phoneSearch1 = await findPhoneByNameAndCompanyWebsite(lead)
  if (phoneSearch1 !== null) {
    return phoneSearch1
  }

  // Try Provider Two
  const phoneSearch2 = await findPhoneByEmail(lead)
  if (phoneSearch2 !== null) {
    return phoneSearch2
  }

  // Try Provider Three
  const phoneSearch3 = await findPhoneByEmailAndJobTitle(lead)
  if (phoneSearch3 !== null) {
    return phoneSearch3
  }

  // No data found
  return null
}
