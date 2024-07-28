

import isEqual from "lodash/isEqual";
import omitBy from "lodash/omitBy";
import isObject from "lodash/isObject";

type Value = { [key: string]: Value } | Value[];

export function getChangedFieldsWithValue<T extends { [key: string]: Value }>(newData: T, originalData: T): Partial<T> {
  if (!isObject(newData) || !isObject(originalData)) {
    throw new Error('Both newData and originalData must be objects.');
  }

  const changedData = omitBy(newData, (value, key) => isEqual(value, originalData[key as keyof T])) as { [K in keyof T]?: Value }
  Object.keys(changedData).forEach(key => {
    const changedValue = changedData[key as keyof T];
    const originalValue = originalData[key as keyof T];
    if (isObject(changedValue) && isObject(originalValue)) {
      changedData[key as keyof T] = getChangedFieldsWithValue(changedValue as { [key: string]: Value }, originalValue as { [key: string]: Value }
      ) as T[keyof T];
    }
  });
  return changedData as Partial<T>;
}




// type Value = { [key: string]: Value } | Value[];

// // Utility function to check if a value is an object
// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// // Utility function to perform deep equality check
// function isEqual(value1: any, value2: any): boolean {
//   if (typeof value1 !== typeof value2) return false;
//   if (isObject(value1) && isObject(value2)) {
//     const keys1 = Object.keys(value1);
//     const keys2 = Object.keys(value2);
//     if (keys1.length !== keys2.length) return false;
//     return keys1.every(key => isEqual(value1[key], value2[key]));
//   }
//   return value1 === value2;
// }

// // Main function to get changed fields
// export function getChangedFieldsWithValue<T extends { [key: string]: Value }>(
//   newData: T,
//   originalData: T
// ): Partial<T> {
//   // Validate inputs
//   if (!isObject(newData) || !isObject(originalData)) {
//     throw new Error('Both newData and originalData must be objects.');
//   }

//   // Find fields that have changed
//   const changedData: Partial<T> = {};
//   for (const key in newData) {
//     if (!isEqual(newData[key], originalData[key as keyof T])) {
//       changedData[key as keyof T] = newData[key];
//     }
//   }

//   // Recursively process nested objects
//   for (const key in changedData) {
//     const changedValue = changedData[key as keyof T];
//     const originalValue = originalData[key as keyof T];
//     if (isObject(changedValue) && isObject(originalValue)) {
//       changedData[key as keyof T] = getChangedFieldsWithValue(
//         changedValue as { [key: string]: Value },
//         originalValue as { [key: string]: Value }
//       ) as T[keyof T];
//     }
//   }

//   return changedData;
// }

