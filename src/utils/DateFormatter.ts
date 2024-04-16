export const dateFormatter = (values:string)=>{

// Parse the date string
const date = new Date(values);

// Extract year, month, and day
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero based
const day = ('0' + date.getDate()).slice(-2);

// Format the date in yyyy-mm-dd
const formattedDate = year + '-' + month + '-' + day;

console.log(formattedDate); // Output: 2024-04-15
return formattedDate

}
