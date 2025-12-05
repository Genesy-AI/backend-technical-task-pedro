export async function verifyEmail(email: string): Promise<boolean> {
  if (email.includes('john.doe')) {
    return false
  }

  if (/\+/.test(email)) {
    return false
  }

  return true
}
