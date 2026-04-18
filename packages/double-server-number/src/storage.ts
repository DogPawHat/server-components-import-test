import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

export const DEFAULT_NUMBER_FILE_NAME = 'double-server-number.txt'

function normalizeNumber(value: unknown) {
  const parsed = typeof value === 'number' ? value : Number(value ?? 0)
  return Number.isFinite(parsed) ? parsed : 0
}

export function resolveNumberFilePath(filePath?: string) {
  return path.resolve(filePath ?? path.join(process.cwd(), DEFAULT_NUMBER_FILE_NAME))
}

export async function readPersistedNumber(filePath?: string) {
  const resolvedFilePath = resolveNumberFilePath(filePath)

  try {
    const rawValue = await readFile(resolvedFilePath, 'utf8')
    return normalizeNumber(rawValue.trim())
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return 0
    }

    throw error
  }
}

export async function writePersistedNumber(value: number, filePath?: string) {
  const resolvedFilePath = resolveNumberFilePath(filePath)
  const normalizedValue = normalizeNumber(value)

  await mkdir(path.dirname(resolvedFilePath), { recursive: true })
  await writeFile(resolvedFilePath, `${normalizedValue}`, 'utf8')

  return normalizedValue
}

export async function doubleAndPersistNumber(value: number, filePath?: string) {
  return writePersistedNumber(normalizeNumber(value) * 2, filePath)
}

export function extractNumberFromFormData(formData: FormData, fieldName = 'value') {
  return normalizeNumber(formData.get(fieldName))
}
