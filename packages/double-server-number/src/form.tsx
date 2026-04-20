import { styles } from "./styles";

interface DoubleServerNumberFormProps {
  filePath?: string;
  fieldName?: string;
  initialValue?: number;
  submitLabel?: string;
  action?: (formData: FormData) => Promise<void>;
}

function DoubleServerNumberForm({
  action,
  fieldName = "value",
  submitLabel = "Double and persist",
}: DoubleServerNumberFormProps) {
  return (
    <form action={action} style={styles.form}>
      <div style={styles.row}>
        <label htmlFor={fieldName}>Enter a number</label>
        <input
          id={fieldName}
          name={fieldName}
          type="number"
          step="any"
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        {submitLabel}
      </button>
    </form>
  );
}

export type { DoubleServerNumberFormProps };
export { DoubleServerNumberForm };
