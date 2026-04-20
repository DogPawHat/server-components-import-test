export const styles = {
  section: {
    border: "1px solid #d4d4d8",
    borderRadius: 12,
    padding: 20,
    background: "#ffffff",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    display: "grid",
    gap: 16,
    maxWidth: 480,
  },
  form: {
    display: "grid",
    gap: 12,
  },
  row: {
    display: "grid",
    gap: 6,
  },
  input: {
    border: "1px solid #cbd5e1",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 16,
  },
  button: {
    appearance: "none",
    border: "none",
    borderRadius: 8,
    padding: "10px 14px",
    background: "#111827",
    color: "#ffffff",
    fontSize: 15,
    cursor: "pointer",
    width: "fit-content",
  },
  code: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    background: "#f4f4f5",
    padding: "0.15rem 0.35rem",
    borderRadius: 6,
  },
} as const;
