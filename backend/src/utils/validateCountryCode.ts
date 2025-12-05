import { INVALID_COUNTRY_CODE_SUFFIX } from 'src/constants'

export function validateCountryCode(code: string | undefined | null): string | null {
  if (!code || !code.trim()) return null

  const countryCodeRegex = /^[A-Z]{2}$/
  return countryCodeRegex.test(code.toUpperCase().trim())
    ? code.trim().toUpperCase()
    : `${code.trim()} ${INVALID_COUNTRY_CODE_SUFFIX}`
}
