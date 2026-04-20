"use client";
import { useRevalidator } from "react-router";

export function ForceRevalidateButton() {
  const { revalidate } = useRevalidator();
  return (
    <button
      type="button"
      style={{
        appearance: "none",
        border: "none",
        borderRadius: 8,
        padding: "10px 14px",
        background: "#111827",
        color: "#ffffff",
        fontSize: 15,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={revalidate}
    >
      Force Revalidate
    </button>
  );
}
