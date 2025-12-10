export type LeadsFindPhoneNumbersInput = {
  leadIds: number[]
}

export type LeadsFindPhoneNumbersOutput = {
  success: boolean
  successfulPhoneSearchCount: number
  unsuccessfulPhoneSearchCount: number
  errors: Array<{
    lead: number
    error: string
  }>
}
