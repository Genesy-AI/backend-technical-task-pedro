export type LeadFindPhoneReqBody = {
  id?: number
  createdAt?: Date
  updatedAt?: Date
  firstName?: string
  lastName?: string
  email?: string
  jobTitle: string | null
  countryCode: string | null
  companyName: string | null
  message: string | null
  emailVerified: boolean | null
}
