'use server'

import { doubleAndPersistNumber, extractNumberFromFormData } from './storage'

export interface DoubleServerNumberActionOptions {
  filePath?: string
  fieldName?: string
}

export async function doubleServerNumber(
  value: number,
  options: DoubleServerNumberActionOptions = {},
) {
  return doubleAndPersistNumber(value, options.filePath)
}

export async function submitDoubleServerNumber(
  options: DoubleServerNumberActionOptions = {},
  formData: FormData,
) {
  const value = extractNumberFromFormData(formData, options.fieldName)
  return doubleServerNumber(value, options)
}
