export function validateCountryCode(code: string | undefined | null): string | null {
  if (!code) return null

  const countryCodeRegex = /^[A-Z]{2}$/
  return countryCodeRegex.test(code.toUpperCase().trim()) ? code.trim() : `${code.trim()} [INVALID]`
}
