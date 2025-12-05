import { describe, expect, it } from 'vitest'
import { validateCountryCode } from './validateCountryCode'
import { INVALID_COUNTRY_CODE_SUFFIX } from '../constants'

describe('validateCountryCode', () => {
  // Tests have been moved to validateCountryCode.test.ts
  it('should validate country code correctly', () => {
    expect(validateCountryCode('US')).toBe('US')
    expect(validateCountryCode(' GB ')).toBe('GB')
    expect(validateCountryCode('   XX   ')).toBe('XX')
  })

  it('should return null for undefined or null input', () => {
    expect(validateCountryCode(undefined)).toBeNull()
    expect(validateCountryCode(null)).toBeNull()
    expect(validateCountryCode('')).toBeNull()
    expect(validateCountryCode('    ')).toBeNull()
  })

  it('should mark invalid country codes', () => {
    expect(validateCountryCode('USA')).toBe(`USA ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('U  s')).toBe(`U  s ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('U1')).toBe(`U1 ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('123')).toBe(`123 ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('A')).toBe(`A ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('!%&')).toBe(`!%& ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode('U$')).toBe(`U$ ${INVALID_COUNTRY_CODE_SUFFIX}`)
    expect(validateCountryCode(' GÖ ')).toBe(`GÖ ${INVALID_COUNTRY_CODE_SUFFIX}`)
  })
})
