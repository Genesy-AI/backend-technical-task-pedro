import { LeadFindPhoneReqBody } from 'src/types/Leads'

export function canUseOrionConnect(lead: LeadFindPhoneReqBody): boolean {
  return !!(lead.firstName && lead.lastName && lead.email)
}

export function canUseAstraDialer(lead: LeadFindPhoneReqBody): boolean {
  return !!lead.email
}

export function canUseNumbusLookup(lead: LeadFindPhoneReqBody): boolean {
  return !!(lead.email && lead.jobTitle)
}

export function canUseAnyProvider(lead: LeadFindPhoneReqBody): boolean {
  return (
    lead &&
    typeof lead === 'object' &&
    (canUseOrionConnect(lead) || canUseAstraDialer(lead) || canUseNumbusLookup(lead))
  )
}
