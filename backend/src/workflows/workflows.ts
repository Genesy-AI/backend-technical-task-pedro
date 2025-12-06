import { proxyActivities } from '@temporalio/workflow'
import type * as activities from './activities'
import { LeadFindPhoneReqBody } from 'src/types/Leads'

const { verifyEmail } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 second',
})

const { findPhoneActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '15 seconds',
})

export async function verifyEmailWorkflow(email: string): Promise<boolean> {
  return await verifyEmail(email)
}

export async function findPhoneWorkflow(lead: LeadFindPhoneReqBody): Promise<string | null> {
  return await findPhoneActivity(lead)
}
