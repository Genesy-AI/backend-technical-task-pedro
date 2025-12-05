import { describe, expect, it } from 'vitest'
import { validateCountryCode } from './validateCountryCode'

describe('validateCountryCode', () => {
  // Tests have been moved to validateCountryCode.test.ts
  it('should validate country code correctly', () => {
    expect(validateCountryCode('US')).toBe('US')
    expect(validateCountryCode(' GB ')).toBe('GB')
    expect(validateCountryCode(' XX ')).toBe('XX')
  })

  it('should return null for undefined or null input', () => {
    expect(validateCountryCode(undefined)).toBeNull()
    expect(validateCountryCode(null)).toBeNull()
    expect(validateCountryCode('')).toBeNull()
  })

  it('should mark invalid country codes', () => {
    expect(validateCountryCode('USA')).toBe('USA [INVALID]')
    expect(validateCountryCode('U1')).toBe('U1 [INVALID]')
    expect(validateCountryCode('123')).toBe('123 [INVALID]')
    expect(validateCountryCode('A')).toBe('A [INVALID]')
    expect(validateCountryCode('!%&')).toBe('!%& [INVALID]')
  })
})
