// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

// Utility function for conversion
function toCamelCase(s: string): string {
  return s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
}

export function convertToCamelCase<T extends AnyObject>(obj: T): AnyObject {
  if (typeof obj !== 'object' || obj === null) return obj;

  if (Array.isArray(obj)) return obj.map((v) => convertToCamelCase(v));

  return Object.keys(obj).reduce((result: AnyObject, key: string) => {
    const camelCaseKey = toCamelCase(key);
    result[camelCaseKey] = convertToCamelCase(obj[key]);
    return result;
  }, {});
}
