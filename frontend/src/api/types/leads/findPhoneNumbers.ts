export type LeadsFindPhoneNumbersInput = {
  leadIds: number[]
}

export type LeadsFindPhoneNumbersOutput = {
  success: boolean
  phonesFoundCount: number
  phoneNotFoundCount: number
  errors: Array<{
    lead: number
    error: string
  }>
}
