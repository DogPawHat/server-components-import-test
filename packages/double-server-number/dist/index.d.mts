//#region src/double-server-number.d.ts
interface DoubleServerNumberValueProps {
  filePath?: string;
  label?: string;
}
interface DoubleServerNumberFormProps {
  filePath?: string;
  fieldName?: string;
  initialValue?: number;
  submitLabel?: string;
}
interface DoubleServerNumberProps {
  title?: string;
  description?: string;
  filePath?: string;
  fieldName?: string;
}
declare function DoubleServerNumberValue({
  filePath,
  label
}: DoubleServerNumberValueProps): Promise<any>;
declare function DoubleServerNumberForm({
  filePath,
  fieldName,
  initialValue,
  submitLabel
}: DoubleServerNumberFormProps): any;
declare function DoubleServerNumber({
  title,
  description,
  filePath,
  fieldName
}: DoubleServerNumberProps): Promise<any>;
//#endregion
//#region src/action.d.ts
interface DoubleServerNumberActionOptions {
  filePath?: string;
  fieldName?: string;
}
declare function doubleServerNumber(value: number, options?: DoubleServerNumberActionOptions): Promise<number>;
declare function submitDoubleServerNumber(options: DoubleServerNumberActionOptions | undefined, formData: FormData): Promise<number>;
//#endregion
//#region src/storage.d.ts
declare const DEFAULT_NUMBER_FILE_NAME = "double-server-number.txt";
declare function resolveNumberFilePath(filePath?: string): any;
declare function readPersistedNumber(filePath?: string): Promise<number>;
declare function writePersistedNumber(value: number, filePath?: string): Promise<number>;
declare function doubleAndPersistNumber(value: number, filePath?: string): Promise<number>;
declare function extractNumberFromFormData(formData: FormData, fieldName?: string): number;
//#endregion
export { DEFAULT_NUMBER_FILE_NAME, DoubleServerNumber, DoubleServerNumber as default, type DoubleServerNumberActionOptions, DoubleServerNumberForm, type DoubleServerNumberFormProps, type DoubleServerNumberProps, DoubleServerNumberValue, type DoubleServerNumberValueProps, doubleAndPersistNumber, doubleServerNumber, extractNumberFromFormData, readPersistedNumber, resolveNumberFilePath, submitDoubleServerNumber, writePersistedNumber };