import "server-only";
import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/storage.ts
const DEFAULT_NUMBER_FILE_NAME = "double-server-number.txt";
function normalizeNumber(value) {
	const parsed = typeof value === "number" ? value : Number(value ?? 0);
	return Number.isFinite(parsed) ? parsed : 0;
}
function resolveNumberFilePath(filePath) {
	return path.resolve(filePath ?? path.join(process.cwd(), "double-server-number.txt"));
}
async function readPersistedNumber(filePath) {
	const resolvedFilePath = resolveNumberFilePath(filePath);
	try {
		return normalizeNumber((await readFile(resolvedFilePath, "utf8")).trim());
	} catch (error) {
		if (error.code === "ENOENT") return 0;
		throw error;
	}
}
async function writePersistedNumber(value, filePath) {
	const resolvedFilePath = resolveNumberFilePath(filePath);
	const normalizedValue = normalizeNumber(value);
	await mkdir(path.dirname(resolvedFilePath), { recursive: true });
	await writeFile(resolvedFilePath, `${normalizedValue}`, "utf8");
	return normalizedValue;
}
async function doubleAndPersistNumber(value, filePath) {
	return writePersistedNumber(normalizeNumber(value) * 2, filePath);
}
function extractNumberFromFormData(formData, fieldName = "value") {
	return normalizeNumber(formData.get(fieldName));
}
//#endregion
//#region src/action.ts
async function doubleServerNumber(value, options = {}) {
	return doubleAndPersistNumber(value, options.filePath);
}
async function submitDoubleServerNumber(options = {}, formData) {
	return doubleServerNumber(extractNumberFromFormData(formData, options.fieldName), options);
}
//#endregion
//#region src/double-server-number.tsx
const styles = {
	section: {
		border: "1px solid #d4d4d8",
		borderRadius: 12,
		padding: 20,
		background: "#ffffff",
		boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
		display: "grid",
		gap: 16,
		maxWidth: 480
	},
	form: {
		display: "grid",
		gap: 12
	},
	row: {
		display: "grid",
		gap: 6
	},
	input: {
		border: "1px solid #cbd5e1",
		borderRadius: 8,
		padding: "10px 12px",
		fontSize: 16
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
		width: "fit-content"
	},
	code: {
		fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
		background: "#f4f4f5",
		padding: "0.15rem 0.35rem",
		borderRadius: 6
	}
};
async function DoubleServerNumberValue({ filePath, label = "Persisted number" }) {
	const persistedNumber = await readPersistedNumber(filePath);
	return /* @__PURE__ */ jsxs("p", { children: [
		/* @__PURE__ */ jsxs("strong", { children: [label, ":"] }),
		" ",
		/* @__PURE__ */ jsx("span", { children: persistedNumber })
	] });
}
function DoubleServerNumberForm({ filePath, fieldName = "value", initialValue = 0, submitLabel = "Double and persist" }) {
	const resolvedFilePath = resolveNumberFilePath(filePath);
	const action = async (formData) => {
		"use server";
		submitDoubleServerNumber({
			filePath: resolvedFilePath,
			fieldName
		}, formData);
	};
	return /* @__PURE__ */ jsxs("form", {
		action,
		style: styles.form,
		children: [/* @__PURE__ */ jsxs("div", {
			style: styles.row,
			children: [/* @__PURE__ */ jsx("label", {
				htmlFor: fieldName,
				children: "Enter a number"
			}), /* @__PURE__ */ jsx("input", {
				id: fieldName,
				name: fieldName,
				type: "number",
				step: "any",
				style: styles.input
			})]
		}), /* @__PURE__ */ jsx("button", {
			type: "submit",
			style: styles.button,
			children: submitLabel
		})]
	});
}
async function DoubleServerNumber({ title = "double-server-number", description = "A shared React Server Component that persists a number to a local text file and doubles it through a `use server` action.", filePath, fieldName = "value" }) {
	const resolvedFilePath = resolveNumberFilePath(filePath);
	const persistedNumber = await readPersistedNumber(resolvedFilePath);
	return /* @__PURE__ */ jsxs("section", {
		style: styles.section,
		children: [
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("p", {
					style: {
						margin: 0,
						color: "#52525b",
						fontSize: 14
					},
					children: "Shared package"
				}),
				/* @__PURE__ */ jsx("h2", {
					style: { margin: "0.25rem 0 0.5rem" },
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						margin: 0,
						color: "#3f3f46"
					},
					children: description
				})
			] }),
			/* @__PURE__ */ jsx(DoubleServerNumberValue, { filePath: resolvedFilePath }),
			/* @__PURE__ */ jsx(DoubleServerNumberForm, {
				filePath: resolvedFilePath,
				fieldName,
				initialValue: persistedNumber
			}),
			/* @__PURE__ */ jsxs("p", {
				style: {
					margin: 0,
					color: "#52525b",
					fontSize: 14
				},
				children: [
					"Store file:",
					" ",
					/* @__PURE__ */ jsx("code", {
						style: styles.code,
						children: path.basename(resolvedFilePath)
					})
				]
			})
		]
	});
}
//#endregion
export { DEFAULT_NUMBER_FILE_NAME, DoubleServerNumber, DoubleServerNumber as default, DoubleServerNumberForm, DoubleServerNumberValue, doubleAndPersistNumber, doubleServerNumber, extractNumberFromFormData, readPersistedNumber, resolveNumberFilePath, submitDoubleServerNumber, writePersistedNumber };
