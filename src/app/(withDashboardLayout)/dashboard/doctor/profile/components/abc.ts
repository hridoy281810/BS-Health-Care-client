// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };



// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (Array.isArray(newData) && Array.isArray(originalData)) {
//     if (newData.length !== originalData.length || !newData.every((item, index) => item === originalData[index])) {
//       return newData.length > 0 ? newData as Partial<T> : {} as Partial<T>;
//     }
//     return {} as Partial<T>;
//   }

//   if (isObject(newData) && isObject(originalData)) {
//     const changedData: Partial<T> = {};

//     Object.keys(originalData).forEach((key) => {
//       const originalValue = (originalData as any)[key];
//       const newValue = (newData as any)[key];

//       if (key in newData) {
//         if (isObject(newValue)) {
//           const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//           if (Object.keys(nestedChanged).length > 0) {
//             changedData[key as keyof T] = nestedChanged as T[keyof T];
//           }
//         } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//           if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//             if (newValue.length > 0) {
//               changedData[key as keyof T] = newValue as T[keyof T];
//             }
//           }
//         } else if (newValue !== originalValue) {
//           changedData[key as keyof T] = newValue as T[keyof T];
//         }
//       }
//     });

//     return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
//   }

//   if (newData !== originalData) {
//     return newData as Partial<T>;
//   }

//   return {} as Partial<T>;
// }

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (Array.isArray(newData) && Array.isArray(originalData)) {
//     if (newData.length !== originalData.length || !newData.every((item, index) => item === originalData[index])) {
//       return newData.length > 0 ? newData as Partial<T> : {} as Partial<T>;
//     }
//     return {} as Partial<T>;
//   }

//   if (isObject(newData) && isObject(originalData)) {
//     const changedData: Partial<T> = {};

//     Object.keys(originalData).forEach((key) => {
//       const originalValue = (originalData as any)[key];
//       const newValue = (newData as any)[key];

//       if (key in newData) {
//         if (isObject(newValue)) {
//           const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//           if (Object.keys(nestedChanged).length > 0) {
//             changedData[key as keyof T] = nestedChanged as T[keyof T];
//           }
//         } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//           if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//             if (newValue.length > 0) {
//               changedData[key as keyof T] = newValue as T[keyof T];
//             }
//           }
//         } else if (newValue !== originalValue) {
//           changedData[key as keyof T] = newValue as T[keyof T];
//         }
//       }
//     });

//     return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
//   }

//   if (newData !== originalData) {
//     return newData as Partial<T>;
//   }

//   return {} as Partial<T>;
// }

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (!isObject(newData) || !isObject(originalData)) {
//     throw new Error('Both newData and originalData must be objects.');
//   }

//   const changedData: Partial<T> = {};

//   Object.keys(originalData).forEach((key) => {
//     const originalValue = (originalData as any)[key];
//     const newValue = (newData as any)[key];

//     if (key in newData) {
//       if (isObject(newValue)) {
//         const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//         if (Object.keys(nestedChanged).length > 0) {
//           changedData[key as keyof T] = nestedChanged as T[keyof T];
//         }
//       } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//         if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//           if (newValue.length > 0) {
//             changedData[key as keyof T] = newValue as T[keyof T];
//           }
//         }
//       } 
//       else if (newValue !== originalValue) {
//         changedData[key as keyof T] = newValue as T[keyof T];
//       }
//     }
//   });
//   return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
// }

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (Array.isArray(newData) && Array.isArray(originalData)) {
//     if (newData.length !== originalData.length || !newData.every((item, index) => item === originalData[index])) {
//       return newData.length > 0 ? newData as Partial<T> : {} as Partial<T>;
//     }
//     return {} as Partial<T>;
//   }

//   if (isObject(newData) && isObject(originalData)) {
//     const changedData: Partial<T> = {};

//     Object.keys(originalData).forEach((key) => {
//       const originalValue = (originalData as any)[key];
//       const newValue = (newData as any)[key];

//       if (key in newData) {
//         if (isObject(newValue)) {
//           const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//           if (Object.keys(nestedChanged).length > 0) {
//             changedData[key as keyof T] = nestedChanged as T[keyof T];
//           }
//         } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//           if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//             if (newValue.length > 0) {
//               changedData[key as keyof T] = newValue as T[keyof T];
//             }
//           }
//         } else if (newValue !== originalValue) {
//           changedData[key as keyof T] = newValue as T[keyof T];
//         }
//       }
//     });

//     return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
//   }

//   if (newData !== originalData) {
//     return newData as Partial<T>;
//   }

//   return {} as Partial<T>;
// }

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (Array.isArray(newData) && Array.isArray(originalData)) {
//     if (newData.length !== originalData.length || !newData.every((item, index) => item === originalData[index])) {
//       return newData.length > 0 ? newData as Partial<T> : {} as Partial<T>;
//     }
//     return {} as Partial<T>;
//   }

//   if (isObject(newData) && isObject(originalData)) {
//     const changedData: Partial<T> = {};

//     Object.keys(originalData).forEach((key) => {
//       const originalValue = (originalData as any)[key];
//       const newValue = (newData as any)[key];

//       if (key in newData) {
//         if (isObject(newValue)) {
//           const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//           if (Object.keys(nestedChanged).length > 0) {
//             changedData[key as keyof T] = nestedChanged as T[keyof T];
//           }
//         } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//           if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//             if (newValue.length > 0) {
//               changedData[key as keyof T] = newValue as T[keyof T];
//             }
//           }
//         } else if (newValue !== originalValue) {
//           changedData[key as keyof T] = newValue as T[keyof T];
//         }
//       }
//     });

//     return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
//   }

//   if (newData !== originalData) {
//     return newData as Partial<T>;
//   }

//   return {} as Partial<T>;
// }

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// function isObject(value: any): value is { [key: string]: any } {
//   return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// export function getChangedFieldsWithoutDefault<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (!isObject(newData) || !isObject(originalData)) {
//     throw new Error('Both newData and originalData must be objects.');
//   }

//   const changedData: Partial<T> = {};

//   Object.keys(originalData).forEach((key) => {
//     const originalValue = (originalData as any)[key];
//     const newValue = (newData as any)[key];

//     if (key in newData) {
//       if (isObject(newValue)) {
//         const nestedChanged = getChangedFieldsWithoutDefault(newValue, originalValue);
//         if (Object.keys(nestedChanged).length > 0) {
//           changedData[key as keyof T] = nestedChanged as T[keyof T];
//         }
//       } else if (Array.isArray(newValue) && Array.isArray(originalValue)) {
//         if (newValue.length !== originalValue.length || !newValue.every((item, index) => item === originalValue[index])) {
//           if (newValue.length > 0) {
//             changedData[key as keyof T] = newValue as T[keyof T];
//           }
//         }
//       } 
//       else if (newValue !== originalValue) {
//         changedData[key as keyof T] = newValue as T[keyof T];
//       }
//     }
//   });
//   return Object.keys(changedData).length > 0 ? changedData : {} as Partial<T>;
// }



// import _ from 'lodash';

// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// export function getChangedFields<T extends Value>(newData: T, originalData: T): Partial<T> {
//   if (!_.isObject(newData) || !_.isObject(originalData)) {
//     throw new Error('Both newData and originalData must be objects.');
//   }

//   // Get the difference between newData and originalData
//   const changedData = _.omitBy(newData, (value, key) => _.isEqual(value, originalData[key]));

//   // Recursively process nested objects
//   Object.keys(changedData).forEach(key => {
//     if (_.isObject(changedData[key])) {
//       changedData[key] = getChangedFields(changedData[key], originalData[key]);
//     }
//   });

//   return changedData as Partial<T>;
// }


// ============================================================

// import isEqual from "lodash/isEqual";
// import omitBy from "lodash/omitBy";
// import isObject from "lodash/isObject";
// import { Dictionary } from "lodash";
// // npm i @types/lodash
// type Value = { [key: string]: Value } ;
// export function getChangedFieldsWithValue<T extends Value>(newData: T, originalData: T) {
//   if (!isObject(newData) && !isObject(originalData)) {
//    alert('newData and originalData must be objects.');
//   }
//   const changedData: Dictionary<Value | undefined> = omitBy(newData, (value, key) => isEqual(value, originalData[key]));
//   Object.keys(changedData).forEach(key => {
//     if (isObject(changedData[key])) {
//       changedData[key] = getChangedFieldsWithValue(changedData[key], originalData[key]);
//     }
//   });
//   return changedData ;
// }
// ===============================
// import isEqual from "lodash/isEqual";
// import omitBy from "lodash/omitBy";
// import isObject from "lodash/isObject";
// import { Dictionary } from "lodash";
// // npm i @types/lodash
// type Value = { [key: string]: Value } ;
// export function getChangedFieldsWithValue<T extends Value>(newData: T, originalData: T) {
//   if (!isObject(newData) && !isObject(originalData)) {
//    alert('newData and originalData must be objects.');
//    throw new Error('Both newData and originalData must be objects.');
//   }
//   const changedData: Dictionary<Value | undefined> = omitBy(newData, (value, key) => isEqual(value, originalData[key]));
//   Object.keys(changedData).forEach(key => {
//     if (isObject(changedData[key])) {
//       changedData[key] = getChangedFieldsWithValue(changedData[key], originalData[key]);
//     }
//   });
//   return changedData ;
// }


// ==================
// type Primitive = string | number | boolean | null | undefined;
// type Value = Primitive | Value[] | { [key: string]: Value };

// export function getChangedFields<T extends Value>(newData: T, defaultValues: T): Partial<T> {
//   const changedData: Partial<T> = Array.isArray(newData) ? ([] as Partial<T>) : ({} as Partial<T>);

//   const keys = new Set([...Object.keys(newData ), ...Object.keys(defaultValues )]);

//   keys.forEach((key) => {
//     const newValue = (newData as any)[key];
//     const defaultValue = (defaultValues as any)[key];

//     if (typeof newValue === 'object' && newValue !== null && defaultValue !== null) {
//       const nestedChanged = getChangedFields(newValue, defaultValue);
//       if (Object.keys(nestedChanged).length > 0) {
//         (changedData as any)[key] = nestedChanged;
//       }
//     } else if (newValue !== defaultValue) {
//       (changedData as any)[key] = newValue;
//     }
//   });

//   return changedData;
// }
