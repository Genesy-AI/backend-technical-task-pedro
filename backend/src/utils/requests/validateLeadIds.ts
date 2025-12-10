import { Request } from 'express'

export const validateLeadIds = (req: Request): { status: number; error: string } | { leadIds: number[] } => {
  if (!req.body || typeof req.body !== 'object') {
    return {
      status: 400,
      error: 'Request body is required and must be valid JSON',
    }
  }

  const { leadIds } = req.body as { leadIds: (string | number)[] }

  if (!Array.isArray(leadIds) || leadIds.length === 0) {
    return {
      status: 400,
      error: '"leadIds" must be a non-empty array',
    }
  }

  const numericIds = leadIds.map((id) => (typeof id === 'string' ? Number(id) : id))

  if (numericIds.some((id) => !Number.isInteger(id) || id <= 0 || isNaN(id))) {
    return {
      status: 400,
      error: 'All leadIds must be valid positive integers',
    }
  }

  return { leadIds: numericIds }
}
