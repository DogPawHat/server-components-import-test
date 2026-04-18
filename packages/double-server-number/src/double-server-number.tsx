import path from 'node:path'

import { submitDoubleServerNumber } from './action'
import { readPersistedNumber, resolveNumberFilePath } from './storage'

export interface DoubleServerNumberValueProps {
  filePath?: string
  label?: string
}

export interface DoubleServerNumberFormProps {
  filePath?: string
  fieldName?: string
  initialValue?: number
  submitLabel?: string
}

export interface DoubleServerNumberProps {
  title?: string
  description?: string
  filePath?: string
  fieldName?: string
}

const styles = {
  section: {
    border: '1px solid #d4d4d8',
    borderRadius: 12,
    padding: 20,
    background: '#ffffff',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
    display: 'grid',
    gap: 16,
    maxWidth: 480,
  },
  form: {
    display: 'grid',
    gap: 12,
  },
  row: {
    display: 'grid',
    gap: 6,
  },
  input: {
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    padding: '10px 12px',
    fontSize: 16,
  },
  button: {
    appearance: 'none',
    border: 'none',
    borderRadius: 8,
    padding: '10px 14px',
    background: '#111827',
    color: '#ffffff',
    fontSize: 15,
    cursor: 'pointer',
    width: 'fit-content',
  },
  code: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    background: '#f4f4f5',
    padding: '0.15rem 0.35rem',
    borderRadius: 6,
  },
} as const

export async function DoubleServerNumberValue({
  filePath,
  label = 'Persisted number',
}: DoubleServerNumberValueProps) {
  const persistedNumber = await readPersistedNumber(filePath)

  return (
    <p>
      <strong>{label}:</strong> <span>{persistedNumber}</span>
    </p>
  )
}

export function DoubleServerNumberForm({
  filePath,
  fieldName = 'value',
  initialValue = 0,
  submitLabel = 'Double and persist',
}: DoubleServerNumberFormProps) {
  const resolvedFilePath = resolveNumberFilePath(filePath)
  const action = submitDoubleServerNumber.bind(null, {
    filePath: resolvedFilePath,
    fieldName,
  })

  return (
    <form action={action} style={styles.form}>
      <div style={styles.row}>
        <label htmlFor={fieldName}>Enter a number</label>
        <input
          id={fieldName}
          name={fieldName}
          type="number"
          step="any"
          defaultValue={initialValue}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        {submitLabel}
      </button>
    </form>
  )
}

export async function DoubleServerNumber({
  title = 'double-server-number',
  description = 'A shared React Server Component that persists a number to a local text file and doubles it through a `use server` action.',
  filePath,
  fieldName = 'value',
}: DoubleServerNumberProps) {
  const resolvedFilePath = resolveNumberFilePath(filePath)
  const persistedNumber = await readPersistedNumber(resolvedFilePath)

  return (
    <section style={styles.section}>
      <header>
        <p style={{ margin: 0, color: '#52525b', fontSize: 14 }}>Shared package</p>
        <h2 style={{ margin: '0.25rem 0 0.5rem' }}>{title}</h2>
        <p style={{ margin: 0, color: '#3f3f46' }}>{description}</p>
      </header>

      <DoubleServerNumberValue filePath={resolvedFilePath} />

      <DoubleServerNumberForm
        filePath={resolvedFilePath}
        fieldName={fieldName}
        initialValue={persistedNumber}
      />

      <p style={{ margin: 0, color: '#52525b', fontSize: 14 }}>
        Store file: <code style={styles.code}>{path.basename(resolvedFilePath)}</code>
      </p>
    </section>
  )
}

export default DoubleServerNumber
